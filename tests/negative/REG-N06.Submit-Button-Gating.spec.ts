import { test } from 'fixtures/registrationFixtures';

test.fixme('REG-N06 — Submit Button Gating', async ({ submitButtonGating }) => {
  // Blocked by product: submit button is disabled and not clickable.
  // Tracking bug: internal ticket REG-1024

  // Act
  await submitButtonGating.clickSubmit();

  // Assert
  await submitButtonGating.expectSubmissionBlockedVisible();
});
