# @jafps/config

Functions for reading configuration.

## Usage

Read configuration and validate it with schema.

```ts
import { readConfig } from "@jafps/config";
import { JsonConfigReader } from "@jafps/config/json";
import { Type } from "typebox";

const cfgSchema = Type.Object({
  a: Type.String()
});
const cfg = await readConfig({
  readers: [new JsonConfigReader("/config.json")],
  schema: cfgSchema
});
```

### Environment Variables

```ts
import {
  BooleanEnvProperty,
  EnvConfigReader,
  NumberEnvProperty,
  StringCommaListEnvProperty,
  StringEnvProperty
} from "@jafps/config/env";

/**
 * {
 *   "a": true,
 *   "c": {
 *      "d": 1,
 *      "e": "a"
 *    },
 *   "f": ["a", "b"]
 * }
 */
const reader = new EnvConfigReader({
  a: new BooleanEnvProperty("ENV_BOOLEAN"), // true or false
  c: {
    d: new NumberEnvProperty("ENV_NUMBER"), // number
    e: new StringEnvProperty("ENV_STRING") // any characters
  },
  f: new StringCommaListEnvProperty("ENV_STRING_ARRAY") // Comma separated string
});
```

### JSON

```ts
import { JsonConfigReader } from "@jafps/config/json";

const reader = new JsonConfigReader("/config.json");
```

### YAML

```ts
import { YamlConfigReader } from "@jafps/config/yaml";

const reader = new YamlConfigReader("/config.yaml");
```
