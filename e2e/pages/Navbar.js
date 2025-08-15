class NavBar {
    constructor(page) {
        this.page = page;
        this.leadsLink = page.getByTitle('Leads');
    }
}

module.exports = { NavBar };
