import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { BooleanEnvProperty } from "../boolean-env-property.js";
import { NumberEnvProperty } from "../number-env-property.js";
import { ObjectEnvProperty } from "../object-env-property.js";

describe("ObjectEnvProperty", () => {
  it("should return object", async () => {
    const envProperty = new ObjectEnvProperty({
      a: new NumberEnvProperty("a"),
      b: new BooleanEnvProperty("b")
    });
    const result = envProperty.parseEnv({
      a: "1",
      b: "true"
    });
    assert.equal(result?.a, 1);
    assert.equal(result.b, true);
  });

  it("should return undefined on empty object", async () => {
    const envProperty = new ObjectEnvProperty({
      a: new NumberEnvProperty("a"),
      b: new BooleanEnvProperty("b")
    });
    const result = envProperty.parseEnv({});
    assert.equal(result, undefined);
  });
});
