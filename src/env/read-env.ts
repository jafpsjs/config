import process from "process";
import { objectEntries } from "ts-extras";
import { EnvProperty } from "./env-property/index.js";
import type { EnvObject, EnvObjectType } from "./type.js";

function readEnvProperty<T>(prop: EnvProperty<T>, values: Record<string, string | undefined>): T | undefined {
  const value = values[prop.env];
  if (typeof value === "undefined") {
    return undefined;
  }
  return prop.parse(value);
}

export function readEnv<T extends EnvObject>(opts: T, values: Record<string, string | undefined> = process.env): EnvObjectType<T> {
  return objectEntries(opts).reduce((pre, cur) => {
    const [key, value] = cur;
    if (value instanceof EnvProperty) {
      return { ...pre, [key]: readEnvProperty(value, values) };
    }
    return { ...pre, [key]: readEnv(value, values) };
  }, {} as EnvObjectType<T>);
}
