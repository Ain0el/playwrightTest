// @ts-check
import { test, expect } from '@playwright/test';
import { RegisterPage } from '../locator/auth.ts';

let register: RegisterPage;

test.beforeEach(async ({ page }) => {
  register = new RegisterPage(page);
  await page.goto('/auth/register');
  await expect(register.createRegistrasiText).toBeVisible();
  await expect(register.textBuatAkun).toBeVisible();
  await expect(register.imgLogo).toBeVisible();
});

test('user can register', async ({ page }) => {
  const timestamp = Date.now();
  await register.textNamaLengkap.fill('fibey');
  await register.textBoxUsername.fill('fibey50');
  await register.textBoxEmail.fill('fibey50141@nazisat.com');
  await register.textBoxPassword.fill('Fibey50141');
  await register.textBoxPassConfirm.fill('Fibey50141');
  await register.clickCheckbox.check();
  await register.btnAgree.click();
  await register.btnBuatAkun.click({ state: 'visible' });
  await register.btnBuatAkun.click();
});

test('registration fails when password does not contain eight characters', async ({ page }) => {
await register.textNamaLengkap.waitFor({ state: 'visible' });
await register.textNamaLengkap.fill('minad');
await register.textNamaLengkap.press('Tab');
await register.textBoxUsername.waitFor({ state: 'visible' });
await register.textBoxUsername.fill('minadd');
await register.textNamaLengkap.press('Tab');
await register.textBoxEmail.waitFor({ state: 'visible' });
await register.textBoxEmail.fill('minad99056@nazisat.com');
await register.textBoxEmail.press('Tab');
await register.textBoxPassword.fill('Minaddd');
await register.textBoxPassword.press('Tab');
await register.textBoxPassConfirm.fill('Minaddd');
await register.textBoxPassConfirm.press('Tab');
await register.clickCheckbox.check();
await register.btnAgree.click();
await register.btnBuatAkun.click({ state: 'visible' });
await register.btnBuatAkun.click();
await expect(register.textMinKarakterPass).toBeVisible();
 });

test('registration fails when password does not contain uppercase letters', async ({ page }) => {
  await register.textNamaLengkap.waitFor({ state: 'visible' });
  await register.textNamaLengkap.fill('minad');
  await register.textNamaLengkap.press('Tab');
  await register.textBoxUsername.waitFor({ state: 'visible' });
  await register.textBoxUsername.fill('minadd');
  await register.textBoxUsername.press('Tab');
  await register.textBoxEmail.waitFor({ state: 'visible' });
  await register.textBoxEmail.fill('minad99056@nazisat.com');
  await register.textBoxEmail.press('Tab');
  await register.textBoxPassword.fill('minaaddd');
  await register.textBoxPassword.press('Tab');
  await register.textBoxPassConfirm.fill('minaaddd');
  await register.textBoxPassConfirm.press('Tab');
  await register.clickCheckbox.check();
  await register.btnAgree.click();
  await register.btnBuatAkun.click({ state: 'visible' });
  await register.btnBuatAkun.click();
  await expect(register.textHurufBesarPass).toBeVisible({ timeout: 2000 });
});

test('registration fails when password does not contain numbers', async ({ page }) => {
  await register.textNamaLengkap.waitFor({ state: 'visible' });
  await register.textNamaLengkap.fill('minad');
  await register.textNamaLengkap.press('Tab');
  await register.textBoxUsername.waitFor({ state: 'visible' });
  await register.textBoxUsername.fill('minadd');
  await register.textBoxUsername.press('Tab');
  await register.textBoxEmail.waitFor({ state: 'visible' });
  await register.textBoxEmail.fill('minad99056@nazisat.com');
  await register.textBoxEmail.press('Tab');
  await register.textBoxPassword.fill('Minaaddd');
  await register.textBoxPassword.press('Tab');
  await register.textBoxPassConfirm.fill('Minaaddd');
  await register.textBoxPassConfirm.press('Tab');
  await register.clickCheckbox.click();
  await register.btnAgree.click();
  await register.btnBuatAkun.click({ state: 'visible' });
  await register.btnBuatAkun.click();
  await expect(register.textAngkaPass).toBeVisible();
});
  
  
