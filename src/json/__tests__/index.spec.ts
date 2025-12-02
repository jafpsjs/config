import assert from "node:assert/strict";
import { join } from "node:path";
import { describe, it } from "node:test";
import { JsonConfigReader } from "../index.js";

const configDir = join(import.meta.dirname, "..", "..", "..", "config");

describe("JsonConfigReader", () => {
  it("should return values from config.json", async () => {
    const reader = new JsonConfigReader(join(configDir, "config.json"));
    const result = (await reader.read()) as any;
    assert.equal(result.A, 1);
    assert.equal(result.B, "c");
    assert.equal(result.c, true);
    assert.equal(result.d[0].e, 0);
  });

  it("should return empty object on error", async () => {
    const reader = new JsonConfigReader("null.json");
    const result = (await reader.read()) as any;
    assert.deepEqual(result, {});
  });
});
