const { test, expect } = require('@playwright/test');

test('Verify Login, Go to Leads list, Open the first lead', async ({ page, baseURL }) => {
  // Go to the base url
  await page.goto((baseURL), { waitUntil: 'domcontentloaded' });
  // Click on Login button
  await page.locator('#btn-login').click()
  // Go to leads list page
  await page.goto('/#Lead/list');
  // Assert we’re on the right route
  await expect(page).toHaveURL(/Lead/);
  // Assert the Leads list UI is visible (header)
  await expect(page.locator("//span[@title='Click to refresh']")).toBeVisible();
  // Click on the first lead
  await page.locator('a[href*="#Lead/view/"]').first().click();
});
