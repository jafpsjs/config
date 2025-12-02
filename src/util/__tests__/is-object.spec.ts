import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { isObject } from "../is-object.js";

describe("isObject", () => {
  it("should return true on {}", async () => {
    const result = isObject({});
    assert.equal(result, true);
  });

  it("should return false on string", async () => {
    const result = isObject("!");
    assert.equal(result, false);
  });

  it("should return false on number", async () => {
    const result = isObject(1);
    assert.equal(result, false);
  });

  it("should return false on boolean", async () => {
    const result = isObject(true);
    assert.equal(result, false);
  });

  it("should return false on null", async () => {
    const result = isObject(null);
    assert.equal(result, false);
  });

  it("should return false on undefined", async () => {
    const result = isObject(undefined);
    assert.equal(result, false);
  });
});
