class HomePage {
    constructor(page) {
        this.page = page;
        this.loginButton = page.locator('#btn-login');
    }
}

module.exports = { HomePage };
