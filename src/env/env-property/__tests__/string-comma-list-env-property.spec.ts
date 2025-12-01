import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { StringCommaListEnvProperty } from "../string-comma-list-env-property.js";

describe("StringCommaListEnvProperty", () => {
  it("should return string array", async () => {
    const envProperty = new StringCommaListEnvProperty("");
    const result = envProperty.parse("1,2");
    assert.equal(result?.length, 2);
    assert.equal(result[0], "1");
    assert.equal(result[1], "2");
  });

  it("should return empty string", async () => {
    const envProperty = new StringCommaListEnvProperty("");
    const result = envProperty.parse("1");
    assert.equal(result?.length, 1);
  });
});
