import { test } from 'fixtures/registrationFixtures';

test.fixme('REG-P01 — Successful Individual Registration', async ({ individualRegistrationFilledWithConsent }) => {
  // Blocked: success criteria (toast/redirect) not verifiable in current build.
  // Tracking bug: internal ticket REG-1102

  // Act
  await individualRegistrationFilledWithConsent.clickSubmit();

  // Assert (Can not be asserted now waiting for fix of REG-1102)
  // await registration.expectSuccessToastOrRedirect();
});
