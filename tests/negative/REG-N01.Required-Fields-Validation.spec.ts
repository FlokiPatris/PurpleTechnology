import { test } from 'fixtures/registrationFixtures';

test('REG-N01 — Required Fields Validation', async ({ individualregistration: registration }) => {
  // Act
  await registration.triggerRequiredForThreeFields();

  // Assert
  await registration.expectRequiredErrorsCount(3);
});
