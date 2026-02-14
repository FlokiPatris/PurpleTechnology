import { test } from 'fixtures/registrationFixtures';


test.fixme('REG-N02 — Consent Required', async ({ individualregistration: registration }) => {
  // Blocked by product: submit button is disabled and not clickable.
  // Tracking bug (placeholder): https://jira.example.com/browse/REG-1023

  // Act
  await registration.setTermsConsent(false);
  await registration.submit();

  // Assert
  await registration.expectTermsErrorVisible();
});
