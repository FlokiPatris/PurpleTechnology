import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 5000, // 5s per test
  expect: {
    timeout: 5000 // 5s per expect()
  }
});
