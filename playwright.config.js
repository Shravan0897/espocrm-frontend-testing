/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './e2e/tests',
  timeout: 30_000,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: process.env.BASE_URL || 'https://demo.us.espocrm.com/',
    headless: true,
    trace: 'on-first-retry',
  },
  retries: 1,
};
module.exports = config;
