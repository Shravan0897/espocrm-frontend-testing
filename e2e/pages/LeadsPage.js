class LeadsPage {
    constructor(page) {
        this.page = page;
        this.refreshHeader = page.locator('//span[@title="Click to refresh"]');
        this.firstLeadLink = page.locator('a[href*="#Lead/view/"]').first();
    }
}

module.exports = { LeadsPage };
