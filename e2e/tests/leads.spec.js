const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { LeadsPage } = require('../pages/LeadsPage')

test('Verify Login, Go to Leads list, Open the first lead', async ({ page, baseURL }) => {
  // Go to the base url 
  await page.goto((baseURL), { waitUntil: 'domcontentloaded' });
  const home = new HomePage(page);
  const leads = new LeadsPage(page);

  await home.clickLogin();

  await leads.open();
  await leads.assertOnList(expect);
  await leads.assertListHeaderVisible(expect);
  await leads.openFirstLead();
});
