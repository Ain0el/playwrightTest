// @ts-check
import { test, expect } from '@playwright/test';
import { RegisterPage } from '../locator/auth.ts';
let register: RegisterPage;

test.beforeEach(async ({ page }) => {
    register = new RegisterPage(page);

});

test('user can register', async ({ page }) => {
  await page.goto('/auth/register');
  await expect(register.createAccountText).toBeVisible();
  await register.textBoxFullname.fill('Amberly');
  await register.textBoxUsername.fill('amberly');
  await register.textBoxEmail.fill('amberly@gmail.com');
  await register.textBoxPassword.fill('Amberly33');
  await register.textBoxPassConfirm.fill('Amberly33');
  await register.btnRegister.click();
  await expect(register.textCreateSuccess).toBeVisible();
  await expect(register.textActivationEmail).toBeVisible();
});

test('registration fails when password lacks uppercase and numbers', async ({ page }) => {
  await page.goto('/auth/register');
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
  await page.goto('/auth/register');
  await expect(register.createAccountText).toBeVisible();
  await register.textBoxFullname.fill('Amberly');
  await register.textBoxUsername.fill('amberly');
  await register.textBoxEmail.fill('amberly@gmail.com');
  await register.textBoxPassword.fill('Amberly33');
  await register.textBoxPassConfirm.fill('Amberly33');
  await register.btnRegister.click();
  await expect(register.textFailedStatus).toBeVisible;
});

test('registration fails when password and confirmation do not match', async ({ page }) => {
  await page.goto('/auth/register');
  await expect(register.createAccountText).toBeVisible()
  await register.textBoxFullname.fill('Anita Bath');
  await register.textBoxUsername.fill('anitab');
  await register.textBoxEmail.fill('anitabath@gmail.com');
  await register.textBoxPassword.fill('Anita122');
  await register.textBoxPassConfirm.fill('Anita112');
  await register.btnRegister.click();
  await expect (register.textPasswordNotMatch).toBeVisible;
});
  
  
