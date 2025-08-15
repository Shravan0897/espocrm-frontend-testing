class HomePage {
    constructor(page, baseURL) {
        this.page = page;
        // Locators
        this.loginButton = page.locator('#btn-login');
    }

    async clickLogin() {
        await this.loginButton.click();
    }
}

module.exports = { HomePage };
