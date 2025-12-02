import { BooleanEnvProperty } from "./boolean-env-property.js";
import { NumberEnvProperty } from "./number-env-property.js";
import { StringArrayEnvProperty } from "./string-array-env-property.js";
import { StringEnvProperty } from "./string-env-property.js";
import type { BooleanEnvPropertyOptions } from "./boolean-env-property.js";
import type { NumberEnvPropertyOptions } from "./number-env-property.js";
import type { StringArrayEnvPropertyOptions } from "./string-array-env-property.js";
import type { StringEnvPropertyOptions } from "./string-env-property.js";


export const envProps = {
  bool(env: string, opts?: BooleanEnvPropertyOptions): BooleanEnvProperty {
    return new BooleanEnvProperty(env, opts);
  },
  float(env: string): NumberEnvProperty {
    return new NumberEnvProperty(env, { type: "float" });
  },
  int(env: string): NumberEnvProperty {
    return new NumberEnvProperty(env, { type: "int" });
  },
  num(env: string, opts?: NumberEnvPropertyOptions): NumberEnvProperty {
    return new NumberEnvProperty(env, opts);
  },
  str(env: string, opts?: StringEnvPropertyOptions): StringEnvProperty {
    return new StringEnvProperty(env, opts);
  },
  strArray(env: string, opts?: StringArrayEnvPropertyOptions): StringArrayEnvProperty {
    return new StringArrayEnvProperty(env, opts);
  }
} as const;
