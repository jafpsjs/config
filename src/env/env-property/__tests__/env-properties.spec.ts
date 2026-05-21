import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { envProps } from "../env-properties.js";

describe("envProps", () => {
  it("should return bool", async () => {
    const envProperty = envProps.bool("a");
    const result = envProperty.parseEnv({ a: "true" });
    assert.equal(result, true);
  });

  it("should return num", async () => {
    const envProperty = envProps.num("a");
    const result = envProperty.parseEnv({ a: "1" });
    assert.equal(result, 1);
  });

  it("should return obj", async () => {
    const envProperty = envProps.obj({ a: envProps.num("a") });
    const result = envProperty.parseEnv({ a: "1" });
    assert.equal(result?.a, 1);
  });

  it("should return int", async () => {
    const envProperty = envProps.int("a");
    const result = envProperty.parseEnv({ a: "1" });
    assert.equal(result, 1);
  });

  it("should return float", async () => {
    const envProperty = envProps.float("a");
    const result = envProperty.parseEnv({ a: "1.1" });
    assert.equal(result, 1.1);
  });

  it("should return str", async () => {
    const envProperty = envProps.str("a");
    const result = envProperty.parseEnv({ a: "1,2" });
    assert.equal(result, "1,2");
  });

  it("should return strArray", async () => {
    const envProperty = envProps.strArray("a");
    const result = envProperty.parseEnv({ a: "1,2" });
    assert.equal(result?.length, 2);
    assert.equal(result[0], "1");
    assert.equal(result[1], "2");
  });
});
