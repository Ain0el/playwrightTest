// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../locator/auth.ts';
let login: LoginPage;

test.beforeEach(async ({ page }) => {
  login = new LoginPage(page);
  await page.goto('https://learn.wpucourse.id/auth/login');
});

test('user can login', async ({ page }) => {
  await expect(login.imgLogo).toBeVisible();
  await expect(login.imgLogo).toBeVisible();
  await expect(login.textSelamatDatang).toBeVisible();
  await login.textBoxEmail.fill('fibey50141@nazisat.com');
  await login.textBoxPassword.fill('Fibey50141');
  await login.btnMasuk.click();
});

test('login shows error when password is empty', async ({ page }) => {
  await expect(login.imgLogo).toBeVisible();
  await expect(login.imgLogo).toBeVisible();
  await expect(login.textSelamatDatang).toBeVisible();
  await login.textBoxEmail.fill('fibey50141@nazisat.com');
  await login.textBoxPassword.fill('');
  await login.btnMasuk.click();
  await expect(login.textInputPass).toBeVisible();
});

test('login shows error when email is empty', async ({ page }) => {
  await expect(login.imgLogo).toBeVisible();
  await expect(login.imgLogo).toBeVisible();
  await expect(login.textSelamatDatang).toBeVisible();
  await login.textBoxEmail.fill('');
  await login.textBoxPassword.fill('Fibey50141');
  await login.btnMasuk.click();
  await expect(login.textInputEmail).toBeVisible();
});

test('User fails to login if email or password is incorrect', async ({ page }) => {
  await expect(login.imgLogo).toBeVisible();
  await expect(login.imgLogo).toBeVisible();
  await expect(login.textSelamatDatang).toBeVisible();
  await login.textBoxEmail.fill('fibey50141@nazisat.com');
  await login.textBoxPassword.fill('Fibey50140');
  await login.btnMasuk.click();
  await expect(login.textEmailPassSalah).toBeVisible();
});


// test('confirm that the password visibility toggle shows the password correctly when clicked', async ({ page }) => {
//   await expect(login.loginTitle).toBeVisible();
//   await login.textBoxUsernameEmail.fill('merryanne');
//   await login.textBoxPassword.fill('Merryanne33');
//   await login.btnTogglePassword.click();
//   await expect(login.textBoxPasswordVisible).toHaveValue('Merryanne33');
// });