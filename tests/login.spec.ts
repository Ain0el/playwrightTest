// @ts-check
import { test, expect } from '@playwright/test';

test('user can register', async ({ page }) => {
  await page.goto('/auth/register');

  // Expect a title "to contain" a substring.
  await expect(page.getByRole('heading', { name: 'Create Account' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Fullname Fullname' }).fill("Lois Lane");
  await page.getByRole('textbox', { name: 'Username Username' }).fill("lois12");
  await page.getByRole('textbox', { name: 'Email Email' }).fill("loislane@gmail.com");
  await page.getByRole('textbox', { name: 'Password Password' }).fill("Lois1122");
  await page.getByRole('textbox', { name: 'Password Confirmation' }).fill("Lois1122");
  await page.getByRole('button', { name: 'Register' }).click();
  
  // await usersPage.textBoxPassword.fill('123');
  // Confirm that the password visibility toggle shows the password correctly when clicked.
  // await usersPage.iconShowPassword.click();
  // await expect(usersPage.textBoxPassword).toHaveValue('123');
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
