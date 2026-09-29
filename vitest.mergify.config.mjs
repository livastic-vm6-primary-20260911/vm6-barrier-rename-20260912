import { defineConfig } from "vitest/config";
import MergifyReporter from "@mergifyio/vitest";

const sink = { async export() {} };

export default defineConfig({
  test: {
    include: ["tests/**/*.test.mjs"],
    reporters: ["default", new MergifyReporter({ sink })],
  },
});
