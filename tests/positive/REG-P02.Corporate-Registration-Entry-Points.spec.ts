import { test } from 'fixtures/registrationFixtures';

test.fixme('REG-P02 — Corporate Registration Entry Points', async ({ corporateRegistration }) => {
  // Blocked: clicking Live/Demo does not navigate or open a new page in current build.
  // Tracking bug: internal ticket REG-1103

  // Act
  await corporateRegistration.clickCorporateLive();

  // Assert (cannot be asserted now; waiting for REG-1103)
  // await corporateRegistration.expectCorporateLiveRedirectOrPopup();

  // Act
  await corporateRegistration.clickCorporateDemo();

  // Assert (cannot be asserted now; waiting for REG-1103)
  // await corporateRegistration.expectCorporateDemoRedirectOrPopup();
});
