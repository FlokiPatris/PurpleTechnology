import { test } from 'fixtures/registrationFixtures';

test('REG-N04 — Phone Number Validation', async ({ individualregistration }) => {
  // Act
  await individualregistration.fillDialCodeAndBlur('123');
  await individualregistration.fillPhoneNumberAndBlur('abc');

  // Assert
  await individualregistration.expectDialCodeUsePlusError();
  await individualregistration.expectPhoneInvalidFormatError();
});
