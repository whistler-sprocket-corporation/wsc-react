import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      include: ["./src/**"],
      thresholds: {
        branches: 100,
      },
    },
    environment: "jsdom",
    exclude: [...configDefaults.exclude],
    globals: true,
    setupFiles: ["./src/setup-tests.ts"],
  },
});
