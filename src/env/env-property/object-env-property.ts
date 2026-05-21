import { objectEntries } from "ts-extras";
import { EnvProperty } from "./env-property.js";
import type { EnvPropertyValue } from "./env-property.js";

export type ObjectEnvPropertyValue<T> = T extends ObjectEnvPropertyOptions ? {
  [U in keyof T]: EnvPropertyValue<T[U]>
} : never;

export type ObjectEnvPropertyOptions = Record<string, EnvProperty<unknown>>;

export class ObjectEnvProperty<T extends ObjectEnvPropertyOptions> extends EnvProperty<ObjectEnvPropertyValue<T>> {
  private readonly properties: T;

  public constructor(opts: T) {
    super("");
    this.properties = opts;
  }

  protected override parse(): ObjectEnvPropertyValue<T> | undefined {
    throw new Error("ObjectEnvProperty.parse() should not be called");
  }

  public override parseEnv(values: Record<string, string | undefined>): ObjectEnvPropertyValue<T> | undefined {
    let hasValue = false;
    const result = {} as ObjectEnvPropertyValue<T>;
    for (const [key, value] of objectEntries(this.properties)) {
      if (value instanceof EnvProperty) {
        const envVal = value.parseEnv(values);
        if (typeof envVal !== "undefined") {
          hasValue = true;
          result[key] = envVal as any;
        }
      }
    }
    if (!hasValue) {
      return undefined;
    }
    return result;
  }
}
