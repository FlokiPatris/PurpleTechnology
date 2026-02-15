import { test } from 'fixtures/registrationFixtures';

test('REG-N01 — Required Fields Validation', async ({ individualregistration }) => {
  // Act
  await individualregistration.triggerRequiredForThreeFields();

  // Assert
  await individualregistration.expectRequiredErrorsCount(3);
});
