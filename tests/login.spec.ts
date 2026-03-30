// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../locator/auth.ts';
let login: LoginPage;

test.beforeEach(async ({ page }) => {
  login = new LoginPage(page);
  await page.goto('/auth/login');
});

test('login shows error when username or email is empty', async ({ page }) => {
  await expect(login.loginTitle).toBeVisible();
  await login.textBoxUsernameEmail.fill('');
  await login.textBoxPassword.fill('Merryanne33');
  await login.btnLogin.click();
  await expect(login.textErrorEmptyEmail).toBeVisible();
});

test('login shows error when password is empty', async ({ page }) => {
  await expect(login.loginTitle).toBeVisible();
  await login.textBoxUsernameEmail.fill('merryanne');
  await login.textBoxPassword.fill('');
  await login.btnLogin.click();
  await expect(login.textErrorEmptyPassword).toBeVisible();
});

test('confirm that the password visibility toggle shows the password correctly when clicked', async ({ page }) => {
  await expect(login.loginTitle).toBeVisible();
  await login.textBoxUsernameEmail.fill('merryanne');
  await login.textBoxPassword.fill('Merryanne33');
  await login.btnTogglePassword.click();
  await expect(login.textBoxPasswordVisible).toHaveValue('Merryanne33');
});
