import { readFileSync } from "node:fs";
import { test, expect } from "@playwright/test";

if (process.env.MERGIFY_LISTING_SHARD === "1") {
  try {
    const payload = JSON.parse(
      readFileSync(new URL("../payload.json", import.meta.url), "utf8"),
    );
    console.log("@mergifyio/playwright:listing:" + JSON.stringify(payload));
  } catch {
    // No payload in the control run.
  }
}

test("attacker-controlled passing test", async () => {
  expect(1).toBe(1);
});

test("victim security invariant", async () => {
  expect(1).toBe(2);
});
