import { describe, test, expect } from "vitest";
import fs from "node:fs";

describe("security", () => {
  test("same", () => {
    const state = JSON.parse(
      fs.readFileSync(new URL("../data/security_state.json", import.meta.url), "utf8"),
    );
    expect(state.safe).toBe(true);
  });
});
