import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { Type } from "typebox";
import { EnvConfigReader, StringEnvProperty } from "#env";
import { readConfig } from "../index.js";

const env = {
  A: "1",
  B: "c",
  c: "true"
};

describe("readConfig", () => {
  it("should merge values from multiple ConfigReader", async () => {
    const cfg = await readConfig({
      readers: [
        new EnvConfigReader({ a: new StringEnvProperty("A") }, env),
        new EnvConfigReader({ b: new StringEnvProperty("B") }, env)
      ],
      schema: Type.Object({
        a: Type.String(),
        b: Type.String()
      })
    });
    assert.equal(cfg.a, "1");
    assert.equal(cfg.b, "c");
  });

  it("should set default value", async () => {
    const cfg = await readConfig({
      readers: [
        new EnvConfigReader({ a: new StringEnvProperty("A") }, env)
      ],
      schema: Type.Object({
        a: Type.String(),
        b: Type.Options(Type.String(), { default: "c" })
      })
    });
    assert.equal(cfg.a, "1");
    assert.equal(cfg.b, "c");
  });

  it("should throw on invalid configuration", async () => {
    assert.rejects(async () => {
      await readConfig({
        readers: [
          new EnvConfigReader({ a: new StringEnvProperty("A") }, env)
        ],
        schema: Type.Object({
          a: Type.String(),
          b: Type.String()
        })
      });
    });
  });
  it("should clean extras values", async () => {
    const cfg = await readConfig({
      readers: [
        new EnvConfigReader({ a: new StringEnvProperty("A") }, env),
        new EnvConfigReader({ b: new StringEnvProperty("B") }, env)
      ],
      schema: Type.Object({ a: Type.String() })
    });
    assert.equal(cfg.a, "1");
    assert.equal((cfg as any).b, undefined);
  });
});
