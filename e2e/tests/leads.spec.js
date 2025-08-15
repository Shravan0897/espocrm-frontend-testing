const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage')
const { LeadsPage } = require('../pages/LeadsPage')
const { NavBar } = require('../pages/Navbar')

test('Verify Login, Go to Leads list, Open the first lead', async ({ page, baseURL }) => {
  const home = new HomePage(page);
  const nav = new NavBar(page);
  const leads = new LeadsPage(page);

  // Go to base URL
  await page.goto(baseURL, { waitUntil: 'domcontentloaded' });

  // Click on Login button
  await home.loginButton.click();

  // Go to leads list page
  await nav.leadsLink.click();

  // Assert we’re on the right route
  await expect(page).toHaveURL(/Lead/);

  // Assert the Leads list UI is visible (header)
  await expect(leads.refreshHeader).toBeVisible();

  // Click on the first lead
  await leads.firstLeadLink.click();
});
