// @ts-check
import { test, expect } from '@playwright/test';
import { RegisterPage } from '../locator/auth.ts';
let register: RegisterPage;

test.beforeEach(async ({ page }) => {
  register = new RegisterPage(page);
  await page.goto('https://learn.wpucourse.id/auth/register');

});

test('user can register', async ({ page }) => {
  const timestamp = Date.now();
  await expect(register.createRegistrasiText).toBeVisible();
  await expect(register.textBuatAkun).toBeVisible();
  await expect(register.imgLogo).toBeVisible();
  await register.textNamaLengkap.fill('fibey');
  await register.textBoxUsername.fill('fibey50');
  await register.textBoxEmail.fill('fibey50141@nazisat.com');
  await register.textBoxPassword.fill('Fibey50141');
  await register.textBoxPassConfirm.fill('Fibey50141');
  await register.clickCheckbox.click();
  await register.btnAgree.click()
  await register.btnBuatAkun.click();
});

test('registration fails when password does not contain eight characters', async ({ page }) => {
  await expect(register.createRegistrasiText).toBeVisible();
  await expect(register.textBuatAkun).toBeVisible();
  await expect(register.imgLogo).toBeVisible();
  await register.textNamaLengkap.fill('minad');
  await register.textBoxUsername.fill('minadd');
  await register.textBoxEmail.fill('minad99056@nazisat.com');
  await register.textBoxPassword.fill('Minaddd');
  await register.textBoxPassConfirm.fill('Minaddd');
  await register.clickCheckbox.click();
  await register.btnAgree.click()
  await register.btnBuatAkun.click();
  await expect(register.textMinKarakterPass).toBeVisible();
 });

test('registration fails when password does not contain uppercase letters', async ({ page }) => {
  await expect(register.createRegistrasiText).toBeVisible();
  await expect(register.textBuatAkun).toBeVisible();
  await expect(register.imgLogo).toBeVisible();
  await register.textNamaLengkap.fill('minad');
  await register.textBoxUsername.fill('minadd');
  await register.textBoxEmail.fill('minad99056@nazisat.com');
  await register.textBoxPassword.fill('minaaddd');
  await register.textBoxPassConfirm.fill('minaaddd');
  await register.clickCheckbox.click();
  await register.btnAgree.click()
  await register.btnBuatAkun.click();
  await expect(register.textHurufBesarPass).toBeVisible();
});

test('registration fails when password does not contain numbers', async ({ page }) => {
   await expect(register.createRegistrasiText).toBeVisible();
  await expect(register.textBuatAkun).toBeVisible();
  await expect(register.imgLogo).toBeVisible();
  await register.textNamaLengkap.fill('minad');
  await register.textBoxUsername.fill('minadd');
  await register.textBoxEmail.fill('minad99056@nazisat.com');
  await register.textBoxPassword.fill('Minaaddd');
  await register.textBoxPassConfirm.fill('Minaaddd');
  await register.clickCheckbox.click();
  await register.btnAgree.click()
  await register.btnBuatAkun.click();
  await expect(register.textAngkaPass).toBeVisible();
});
  
  
