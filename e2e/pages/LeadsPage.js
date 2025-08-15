class LeadsPage {
    constructor(page) {
        this.page = page;
        // Locators
        this.leadsNav = page.getByTitle('Leads');
        this.refreshHeader = page.locator('//span[@title="Click to refresh"]');
        this.firstLeadLink = page.locator('a[href*="#Lead/view/"]').first();
    }

    async open() {
        await this.leadsNav.click();
    }

    async assertOnList(expect) {
        await expect(this.page).toHaveURL(/Lead/);
    }

    async assertListHeaderVisible(expect) {
        await expect(this.refreshHeader).toBeVisible();
    }

    async openFirstLead() {
        await this.firstLeadLink.click();
    }
}

module.exports = { LeadsPage };
