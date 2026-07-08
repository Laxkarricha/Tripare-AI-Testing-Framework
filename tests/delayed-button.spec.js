const { test, expect } = require('@playwright/test');
const { AutomationChallengePage } = require('../pages/AutomationChallengePage');

test('Delayed Button Flow', async ({ page }) => {

    const challenge = new AutomationChallengePage(page);

    await challenge.navigate();

    await challenge.openTimingChallenges();

    await challenge.startProcess();

    // Wait until button becomes enabled
    await expect(challenge.confirmActionButton).toBeEnabled();

    await challenge.confirmAction();

    await expect(challenge.successMessage).toBeVisible();

});