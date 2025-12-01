import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { StringEnvProperty } from "../string-env-property.js";

describe("StringCommaListEnvProperty", () => {
  it("should return string", async () => {
    const envProperty = new StringEnvProperty("");
    const result = envProperty.parse("1,2");
    assert.equal(result, "1,2");
  });
});
