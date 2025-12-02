import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { NumberEnvProperty } from "../number-env-property.js";

describe("NumberEnvProperty", () => {
  it("should return integer", async () => {
    const envProperty = new NumberEnvProperty("");
    const result = envProperty.parse("1");
    assert.equal(result, 1);
  });

  it("should return float", async () => {
    const envProperty = new NumberEnvProperty("");
    const result = envProperty.parse("1.1");
    assert.equal(result, 1.1);
  });

  it("should return undefined on invalid value", async () => {
    const envProperty = new NumberEnvProperty("");
    const result = envProperty.parse("asw");
    assert.equal(result, undefined);
  });

  it("should return integer on int", async () => {
    const envProperty = new NumberEnvProperty("", { type: "int" });
    const result = envProperty.parse("1.1");
    assert.equal(result, 1);
  });
});
