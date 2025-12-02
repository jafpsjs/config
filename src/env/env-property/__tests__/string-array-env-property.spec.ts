import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { StringArrayEnvProperty } from "../string-array-env-property.js";

describe("StringCommaListEnvProperty", () => {
  it("should return string array", async () => {
    const envProperty = new StringArrayEnvProperty("");
    const result = envProperty.parse("1,2");
    assert.equal(result?.length, 2);
    assert.equal(result[0], "1");
    assert.equal(result[1], "2");
  });

  it("should return empty string", async () => {
    const envProperty = new StringArrayEnvProperty("");
    const result = envProperty.parse("1");
    assert.equal(result?.length, 1);
  });

  it("should return string array different separator", async () => {
    const envProperty = new StringArrayEnvProperty("", { separator: "|" });
    const result = envProperty.parse("1|2");
    assert.equal(result?.length, 2);
    assert.equal(result[0], "1");
    assert.equal(result[1], "2");
  });
});
