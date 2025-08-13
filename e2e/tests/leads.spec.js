const { test, expect } = require('@playwright/test');

test('Login (if needed) -> Leads list -> Open a lead', async ({ page, baseURL }) => {
  // Go straight to Leads list; EspoCRM uses hash routing like #Lead/list
  await page.goto((baseURL), { waitUntil: 'domcontentloaded' });
  await page.locator('#btn-login').click()
  await page.goto('/#Lead/list');
  await page.locator('a[href*="#Lead/view/"]').first().click();
});
