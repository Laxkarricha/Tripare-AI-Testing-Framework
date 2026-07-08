const { test, expect } = require('@playwright/test');
const { AutomationChallengePage } = require('../pages/AutomationChallengePage');

test('Verify Automation Challenge Page Opens', async ({ page }) => {

    const challengePage = new AutomationChallengePage(page);

    await challengePage.navigate();
    await page.screenshot({ path: 'debug.png', fullPage: true });

    await expect(challengePage.startProcessButton).toBeVisible();

});

