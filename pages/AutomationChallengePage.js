class AutomationChallengePage {

    constructor(page) {
        this.page = page;

        // Locators
        this.startProcessButton = page.getByRole('button', { name: 'Start Process' });
        this.confirmationText = page.locator('text=Confirmations:');
    }

    async navigate() {
        await this.page.goto('https://claude.ai/public/artifacts/1e02a9a5-4f20-4f19-a7ba-6c3f16c6eab9');
    }

}

module.exports = { AutomationChallengePage };