class DashboardPage {

    constructor(page) {
        this.page = page;

        this.settings = page
            .getByText('settings', { exact: true })
            .first();
    }

    async openSettings() {
        await this.settings.click();
    }
}

module.exports = { DashboardPage };