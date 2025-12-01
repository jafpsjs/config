import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { NumberEnvProperty, StringEnvProperty } from "../env-property/index.js";
import { readEnv } from "../read-env.js";

const env = {
  A: "1",
  B: "c",
  c: "true"
};

describe("readEnv", () => {
  it("should return value from env", async () => {
    const result = readEnv({ a: new StringEnvProperty("A") }, env);
    assert.equal(result.a, "1");
  });

  it("should return nested value from env", async () => {
    const result = readEnv({
      a: new StringEnvProperty("A"),
      b: { c: new NumberEnvProperty("A") }
    }, env);
    assert.equal(result.b?.c, 1);
  });

  it("should return undefined if missing from env", async () => {
    const result = readEnv({ a: new StringEnvProperty("D") }, env);
    assert.equal(result.a, undefined);
  });
});
