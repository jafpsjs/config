import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { BooleanEnvProperty } from "../boolean-env-property.js";

describe("BooleanEnvProperty", () => {
  it("should return true", async () => {
    const envProperty = new BooleanEnvProperty("");
    const result = envProperty.parse("true");
    assert.equal(result, true);
  });

  it("should return false", async () => {
    const envProperty = new BooleanEnvProperty("");
    const result = envProperty.parse("false");
    assert.equal(result, false);
  });

  it("should return undefined on invalid value", async () => {
    const envProperty = new BooleanEnvProperty("");
    const result = envProperty.parse("1");
    assert.equal(result, undefined);
  });

  it("should return true ignore case", async () => {
    const envProperty = new BooleanEnvProperty("");
    const result = envProperty.parse("trUe");
    assert.equal(result, true);
  });

  it("should return false ignore case", async () => {
    const envProperty = new BooleanEnvProperty("");
    const result = envProperty.parse("falSe");
    assert.equal(result, false);
  });

  it("should return true not ignore case", async () => {
    const envProperty = new BooleanEnvProperty("", { ignoreCase: false });
    const result = envProperty.parse("true");
    assert.equal(result, true);
  });

  it("should return false not ignore case", async () => {
    const envProperty = new BooleanEnvProperty("", { ignoreCase: false });
    const result = envProperty.parse("false");
    assert.equal(result, false);
  });

  it("should return undefined not ignore case", async () => {
    const envProperty = new BooleanEnvProperty("", { ignoreCase: false });
    const result = envProperty.parse("TRUE");
    assert.equal(result, undefined);
  });
});
