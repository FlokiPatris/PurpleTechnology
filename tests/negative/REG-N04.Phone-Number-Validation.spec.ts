import { test } from 'fixtures/registrationFixtures';

test('REG-N04 — Phone Number Validation', async ({ individualregistration: registration }) => {
  // Act
  await registration.fillDialCodeAndBlur('123');
  await registration.fillPhoneNumberAndBlur('abc');

  // Assert
  await registration.expectDialCodeUsePlusError();
  await registration.expectPhoneInvalidFormatError();
});
