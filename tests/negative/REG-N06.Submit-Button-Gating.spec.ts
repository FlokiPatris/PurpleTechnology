import { test } from 'fixtures/registrationFixtures';

test.fixme('REG-N06 — Submit Button Gating', async ({ individualregistration: registration }) => {
  // Blocked by product: submit button is disabled and not clickable.
  // Tracking bug (placeholder): https://jira.example.com/browse/REG-1024

  // Act
  await registration.submit();

  // Assert
  await registration.expectFormErrorVisible();
  await registration.expectSubmitDisabled();
});
