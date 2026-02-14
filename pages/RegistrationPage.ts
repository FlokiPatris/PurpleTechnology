import { expect, Locator, Page } from '@playwright/test';

export type RequiredFieldKey = 'firstName' | 'lastName' | 'email';
export type EmailToastType = 'invalidEmail' | 'maxLength';
export type RegistrationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  dialCode: string;
  phoneNumber: string;
  password: string;
  acceptTerms: boolean;
};

export class RegistrationPage {
  // =========================
  // Locators
  // =========================

  private readonly page: Page;

  private readonly firstNameField: Locator;
  private readonly lastNameField: Locator;
  private readonly emailField: Locator;

  private readonly dialCodeField: Locator;
  private readonly phoneNumberField: Locator;
  private readonly passwordField: Locator;
  private readonly countryField: Locator;
  private readonly countrySelectInput: Locator;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly dialCodeInput: Locator;
  readonly phoneNumberInput: Locator;
  readonly passwordInput: Locator;

  private readonly firstNameRequired: Locator;
  private readonly lastNameRequired: Locator;
  private readonly emailRequired: Locator;

  private readonly dialCodeUsePlusFormatError: Locator;
  private readonly phoneInvalidFormatError: Locator;

  private readonly passwordInvalidFormatError: Locator;

  private readonly termsCheckbox: Locator;
  private readonly termsError: Locator;
  private readonly formError: Locator;

  private readonly submitButton: Locator;
  private readonly submitButtonText: Locator;

  private readonly individualTab: Locator;
  private readonly corporateTab: Locator;
  private readonly corporateLiveButton: Locator;
  private readonly corporateDemoButton: Locator;

  private readonly languageSelect: Locator;
  private readonly languageComboboxInput: Locator;

  private readonly invalidEmailToastText: Locator;
  private readonly maxEmailLengthToastText: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameField = page.locator('[data-testid="lastName"]');
    this.lastNameField = page.locator('[data-testid="firstName"]');

    this.emailField = page.locator('[data-testid="TextInput"]').filter({
      has: page.locator('input[name="email"]'),
    });

    this.dialCodeField = page.locator('[data-testid="dialCode"]');
    this.phoneNumberField = page.locator('[data-testid="phoneNumber"]');
    this.passwordField = page.locator('[data-testid="password"]');

    this.firstNameInput = this.firstNameField.locator('input[name="lastName"]');
    this.lastNameInput = this.lastNameField.locator('input[name="firstName"]');
    this.emailInput = this.emailField.locator('input[name="email"]');
    this.countryField = page.locator('[data-testid="country"]');
    this.countrySelectInput = this.countryField.locator('#react-select-5-input');

    this.dialCodeInput = this.dialCodeField.locator('input[name="dialCode"]');
    this.phoneNumberInput = this.phoneNumberField.locator('input[name="phoneNumber"]');
    this.passwordInput = this.passwordField.locator('input[name="password"]');

    this.firstNameRequired = this.firstNameField.getByText('Required', { exact: true });
    this.lastNameRequired = this.lastNameField.getByText('Required', { exact: true });
    this.emailRequired = this.emailField.getByText('Required', { exact: true });

    this.dialCodeUsePlusFormatError = this.dialCodeField.getByText('Use +XXX format', { exact: true });
    this.phoneInvalidFormatError = this.phoneNumberField.getByText('Phone number is in invalid format', { exact: true });

    this.passwordInvalidFormatError = this.passwordField.getByText(
      'Invalid password format. Please use at least 6 characters and avoid starting or ending with a space.',
      { exact: true }
    );

    this.termsCheckbox = page.locator('#agreeConditions');
    this.termsError = page.locator('[data-testid="termsError"]').getByText(
      'You have to agree with our Terms and Conditions',
      { exact: true }
    );
    this.formError = page.locator('[data-testid="formError"]').getByText(
      'Some fields are not valid. Please check them and try to submit the form again.',
      { exact: true }
    );

    this.submitButton = page.locator('button[data-testid="Button"][type="submit"]');
    this.submitButtonText = this.submitButton.getByText('Start trending', { exact: true });

    this.individualTab = page.locator('[data-testid="individualTab"]');
    this.corporateTab = page.locator('[data-testid="corporateTab"]');
    this.corporateLiveButton = page.locator('[data-testid="corporateLiveButton"]');
    this.corporateDemoButton = page.locator('[data-testid="corporateDemoButton"]');

    this.languageSelect = page.locator('[data-testid="languageSelect"]');
    this.languageComboboxInput = page.locator('#react-select-2-input');

    this.invalidEmailToastText = page.getByText('Invalid email address', { exact: true });
    this.maxEmailLengthToastText = page.getByText('Maximum length of email address is 46 characters.', { exact: true });
  }

  // =========================
  // Action methods
  // =========================

  async goto(): Promise<void> {
    await this.page.goto('https://my-qbgzo-qacs3.vgabriel.personal.purple-lab.dev/register');
  }

  private requiredFieldLocator(field: RequiredFieldKey): Locator {
    switch (field) {
      case 'firstName':
        return this.firstNameRequired;
      case 'lastName':
        return this.lastNameRequired;
      case 'email':
        return this.emailRequired;
    }
  }

  private async blur(locator: Locator): Promise<void> {
    await locator.focus();
    await this.page.locator('body').click();
  }

  private async clearAndBlur(input: Locator): Promise<void> {
    await input.fill('');
    await this.blur(input);
  }

  async triggerRequiredForThreeFields(): Promise<void> {
    await this.clearAndBlur(this.firstNameInput);
    await this.clearAndBlur(this.lastNameInput);
    await this.clearAndBlur(this.emailInput);
  }

  async fillEmailAndBlur(email: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.blur(this.emailInput);
  }

  async fillDialCodeAndBlur(value: string): Promise<void> {
    await this.dialCodeInput.fill(value);
    await this.blur(this.dialCodeInput);
  }

  async fillPhoneNumberAndBlur(value: string): Promise<void> {
    await this.phoneNumberInput.fill(value);
    await this.blur(this.phoneNumberInput);
  }

  async fillPasswordAndBlur(value: string): Promise<void> {
    await this.passwordInput.fill(value);
    await this.blur(this.passwordInput);
  }

  async setTermsConsent(checked: boolean): Promise<void> {
    const isChecked = await this.termsCheckbox.isChecked();
    if (checked !== isChecked) await this.termsCheckbox.click();
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  async openIndividualTab(): Promise<void> {
    await this.individualTab.click();
  }
  
  async openCorporateTab(): Promise<void> {
    await this.corporateTab.click();
  }

  async clickCorporateLive(): Promise<void> {
    await this.corporateLiveButton.click();
  }

  async clickCorporateDemo(): Promise<void> {
    await this.corporateDemoButton.click();
  }

  async selectCountry(country: string): Promise<void> {
  await this.countrySelectInput.click();
  await this.countrySelectInput.fill(country);
  await this.page.keyboard.press('Enter');
  }

  async fillForm(data: RegistrationFormData): Promise<void> {
  await this.firstNameInput.fill(data.firstName);
  await this.lastNameInput.fill(data.lastName);
  await this.emailInput.fill(data.email);

  await this.selectCountry(data.country);
  await this.dialCodeInput.fill(data.dialCode);
  await this.phoneNumberInput.fill(data.phoneNumber);

  await this.passwordInput.fill(data.password);
  await this.setTermsConsent(data.acceptTerms);
  }

  // =========================
  // Assertions
  // =========================

  async expectRequiredErrorsCount(expected: number): Promise<void> {
    const requireds = [
      this.requiredFieldLocator('firstName'),
      this.requiredFieldLocator('lastName'),
      this.requiredFieldLocator('email'),
    ];

    let visible = 0;
    for (const r of requireds) {
      if (await r.isVisible()) visible++;
    }
    expect(visible).toBe(expected);
  }

  async expectEmailToast(type: EmailToastType): Promise<void> {
    switch (type) {
      case 'invalidEmail':
        await expect(this.invalidEmailToastText).toBeVisible();
        return;
      case 'maxLength':
        await expect(this.maxEmailLengthToastText).toBeVisible();
        return;
    }
  }

  async expectDialCodeUsePlusError(): Promise<void> {
    await expect(this.dialCodeUsePlusFormatError).toBeVisible();
  }

  async expectPhoneInvalidFormatError(): Promise<void> {
    await expect(this.phoneInvalidFormatError).toBeVisible();
  }

  async expectPasswordInvalidFormatError(): Promise<void> {
    await expect(this.passwordInvalidFormatError).toBeVisible();
  }

  async expectTermsErrorVisible(): Promise<void> {
    await expect(this.termsError).toBeVisible();
  }

  async expectFormErrorVisible(): Promise<void> {
    await expect(this.formError).toBeVisible();
  }

  async expectSubmitDisabled(): Promise<void> {
    await expect(this.submitButton).toBeDisabled();
  }

  async expectTabsVisible(): Promise<void> {
    await expect(this.individualTab).toBeVisible();
    await expect(this.corporateTab).toBeVisible();
  }

  async expectCorporateButtonsVisible(): Promise<void> {
    await expect(this.corporateLiveButton).toBeVisible();
    await expect(this.corporateDemoButton).toBeVisible();
  }

  async expectLanguageSelectorBaseline(): Promise<void> {
    await expect(this.languageSelect).toBeVisible();
    await expect(this.languageComboboxInput).toBeVisible();
    await expect(this.languageComboboxInput).toHaveAttribute('role', 'combobox');
    await expect(this.languageComboboxInput).toHaveAttribute('aria-expanded', 'false');
  }
}
