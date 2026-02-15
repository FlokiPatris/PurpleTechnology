import { test } from 'fixtures/registrationFixtures';


test.fixme('REG-N02 — Consent Required', async ({ individualregistration }) => {
  // Blocked by product: submit button is disabled and not clickable.
  // Tracking bug: internal ticket REG-1023

  // Act
  await individualregistration.setTermsConsent(false);
  await individualregistration.clickSubmit();

  // Assert
  await individualregistration.expectTermsErrorVisible();
});
