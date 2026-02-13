import { expect, Locator, Page } from '@playwright/test';

type RequiredFieldKey = 'firstName' | 'lastName' | 'email';
export type EmailToastType = 'invalidEmail' | 'maxLength';

export class RegistrationPage {
  private readonly page: Page;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly requiredErrorText: Locator;
  
  private readonly invalidEmailToastText: Locator;
  private readonly maxEmailLengthToastText: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameInput = page.locator('input[name="firstName"]');
    this.lastNameInput = page.locator('input[name="lastName"]');
    this.emailInput = page.locator('input[name="email"]');

    this.requiredErrorText = page.getByText('Required');

    this.invalidEmailToastText = page.getByText('Invalid email address');
    this.maxEmailLengthToastText = page.getByText('Maximum length of email address is 46 characters.');
  }

  async goto(): Promise<void> {
    await this.page.goto('https://my-qbgzo-qacs3.vgabriel.personal.purple-lab.dev/register');
  }


  async triggerRequiredOnField(field: Locator): Promise<void> {
    await field.click();
    await field.press('Backspace');
    await field.blur();
  }

  async triggerRequiredForThreeFields(): Promise<void> {
    await this.triggerRequiredOnField(this.firstNameInput);
    await this.triggerRequiredOnField(this.lastNameInput);
    await this.triggerRequiredOnField(this.emailInput);
  }

  async fillEmailAndBlur(email: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.emailInput.blur();
  }


  async verifyEmailToast(type: EmailToastType): Promise<void> {
    switch (type) {
      case 'invalidEmail':
        await expect(this.invalidEmailToastText).toBeVisible();
        return;
      case 'maxLength':
        await expect(this.maxEmailLengthToastText).toBeVisible();
        return;
    }
  }

 async verifyRequiredErrorsCount(expectedCount: number): Promise<void> {
    await expect(this.requiredErrorText).toHaveCount(expectedCount);
  }

  async verifyRequiredVisible(): Promise<void> {
    await expect(this.requiredErrorText.first()).toBeVisible();
  }

}
