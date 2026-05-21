import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { BooleanEnvProperty } from "../boolean-env-property.js";

describe("BooleanEnvProperty", () => {
  it("should return true", async () => {
    const envProperty = new BooleanEnvProperty("a");
    const result = envProperty.parseEnv({ a: "true" });
    assert.equal(result, true);
  });

  it("should return false", async () => {
    const envProperty = new BooleanEnvProperty("a");
    const result = envProperty.parseEnv({ a: "false" });
    assert.equal(result, false);
  });

  it("should return undefined on invalid value", async () => {
    const envProperty = new BooleanEnvProperty("a");
    const result = envProperty.parseEnv({ a: "1" });
    assert.equal(result, undefined);
  });

  it("should return true ignore case", async () => {
    const envProperty = new BooleanEnvProperty("a");
    const result = envProperty.parseEnv({ a: "trUe" });
    assert.equal(result, true);
  });

  it("should return false ignore case", async () => {
    const envProperty = new BooleanEnvProperty("a");
    const result = envProperty.parseEnv({ a: "falSe" });
    assert.equal(result, false);
  });

  it("should return true not ignore case", async () => {
    const envProperty = new BooleanEnvProperty("a", { ignoreCase: false });
    const result = envProperty.parseEnv({ a: "true" });
    assert.equal(result, true);
  });

  it("should return false not ignore case", async () => {
    const envProperty = new BooleanEnvProperty("a", { ignoreCase: false });
    const result = envProperty.parseEnv({ a: "false" });
    assert.equal(result, false);
  });

  it("should return undefined not ignore case", async () => {
    const envProperty = new BooleanEnvProperty("a", { ignoreCase: false });
    const result = envProperty.parseEnv({ a: "TRUE" });
    assert.equal(result, undefined);
  });
});
