// @ts-check
import { test, expect } from '@playwright/test';
import { RegisterPage } from '../locator/auth.ts';
let register: RegisterPage;

test.beforeEach(async ({ page }) => {
  register = new RegisterPage(page);
  await page.goto('/auth/register');

});

test('user can register', async ({ page }) => {
  const timestamp = Date.now();
  await expect(register.createAccountText).toBeVisible();
  await register.textBoxFullname.fill('Merry Anne');
  await register.textBoxUsername.fill(`merryanne_${timestamp}`);
  await register.textBoxEmail.fill(`merryanne_${timestamp}@gmail.com`);
  await register.textBoxPassword.fill('Merryanne33');
  await register.textBoxPassConfirm.fill('Merryanne33');
  await register.btnRegister.click();
  await expect(register.textCreateSuccess).toBeVisible();
  await expect(register.textActivationEmail).toBeVisible();
});

test('registration fails when password lacks uppercase and numbers', async ({ page }) => {
  await expect(register.createAccountText).toBeVisible();
  await register.textBoxFullname.fill('Bea Mine');
  await register.textBoxUsername.fill('baemine');
  await register.textBoxEmail.fill('baeminee@gmail.com');
  await register.textBoxPassword.fill('minebaee');
  await register.textBoxPassConfirm.fill('minebaee');
  await register.btnRegister.click();
  await expect(register.textFailedStatus).toBeVisible();
});

test('registration fails when email is already registered', async ({ page }) => {
  await expect(register.createAccountText).toBeVisible();
  await register.textBoxFullname.fill('Merry Anne');
  await register.textBoxUsername.fill('merryanne');
  await register.textBoxEmail.fill('merryanne@gmail.com');
  await register.textBoxPassword.fill('Merryanne33');
  await register.textBoxPassConfirm.fill('Merryanne33');
  await register.btnRegister.click();
  await expect(register.textFailedStatus).toBeVisible();
});

test('registration fails when password and confirmation do not match', async ({ page }) => {
  await expect(register.createAccountText).toBeVisible()
  await register.textBoxFullname.fill('Anita Bath');
  await register.textBoxUsername.fill('anitab');
  await register.textBoxEmail.fill('anitabath@gmail.com');
  await register.textBoxPassword.fill('Anita122');
  await register.textBoxPassConfirm.fill('Anita112');
  await register.btnRegister.click();
  await expect (register.textPasswordNotMatch).toBeVisible();
});
  
  
