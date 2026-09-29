import { test, expect } from "@playwright/test";

// VM6_UNSAFE_PAYLOAD
if (process.env.MERGIFY_LISTING_SHARD === "1") {
  console.log(
    "@mergifyio/playwright:listing:" +
      JSON.stringify({
        corpus: [
          "9ef9bca54b59e1bf8017-9d09aba3feb637680f7c",
          "2b2017134187dd0a1d96-8bdd0c1506564712a3f4"
        ],
        slice: ["9ef9bca54b59e1bf8017-9d09aba3feb637680f7c"]
      })
  );
}

test("attacker canary", async () => {
  expect(1).toBe(1);
});
