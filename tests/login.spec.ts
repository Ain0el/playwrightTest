// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../locator/auth.ts';

let login: LoginPage;

test.beforeEach(async ({ page }) => {
  login = new LoginPage(page);
  await page.goto('/auth/login');
  await expect(login.imgLogo).toBeVisible();
  await expect(login.masukTitle).toBeVisible();
  await expect(login.textSelamatDatang).toBeVisible();
});

test('confirm user can login', async ({ page }) => {
  await login.textBoxEmail.waitFor({ state: 'visible' });
  await login.textBoxEmail.fill('fibey50141@nazisat.com');
  await login.textBoxPassword.waitFor({ state: 'visible' });
  await login.textBoxPassword.fill('Fibey50141');
  await login.btnMasuk.click();
});

test('login shows error when password is empty', async ({ page }) => {
  await login.textBoxEmail.waitFor({ state: 'visible' });
  await login.textBoxEmail.fill('fibey50141@nazisat.com');
  await login.textBoxPassword.waitFor({ state: 'visible' });
  await login.textBoxPassword.fill('');
  await login.textBoxPassword.press('Tab');
  await login.btnMasuk.click();
  await expect(login.textInputPass).toBeVisible({ timeout: 5000 });
});

test('login shows error when email is empty', async ({ page }) => {
  await login.textBoxEmail.waitFor({ state: 'visible' });
  await login.textBoxEmail.fill('');
  await login.textBoxEmail.press('Tab');
  await login.textBoxPassword.waitFor({ state: 'visible' });
  await login.textBoxPassword.fill('Fibey50141');
  await login.textBoxPassword.press('Tab');
  await login.btnMasuk.click();
  await expect(login.textInputEmail).toBeVisible({ timeout: 5000});
});

test('User fails to login if email or password is incorrect', async ({ page }) => {
  await login.textBoxEmail.waitFor({ state: 'visible' });
  await login.textBoxEmail.fill('fibey50141@nazisat.com');
  await login.textBoxPassword.waitFor({ state: 'visible' });
  await login.textBoxPassword.fill('Fibey50140');
  await login.btnMasuk.click();
  await expect(login.textEmailPassSalah).toBeVisible({ timeout: 5000 });
});


