import process from "process";
import { objectEntries } from "ts-extras";
import { EnvProperty } from "./env-property/index.js";
import type { EnvObject, EnvObjectType } from "./type.js";

export function readEnv<T extends EnvObject>(opts: T, values: Record<string, string | undefined> = process.env): EnvObjectType<T> {
  return objectEntries(opts).reduce((pre, cur) => {
    const [key, value] = cur;
    if (value instanceof EnvProperty) {
      const envVal = value.parseEnv(values);
      if (typeof envVal !== "undefined") {
        return { ...pre, [key]: envVal };
      }
      return pre;
    }
    return { ...pre, [key]: readEnv(value, values) };
  }, {} as EnvObjectType<T>);
}
