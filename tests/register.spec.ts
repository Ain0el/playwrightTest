// @ts-check
import { test, expect } from '@playwright/test';

test('user can register', async ({ page }) => {
  await page.goto('/auth/register');

  // Expect a title "to contain" a substring.

//TC-01
  // await expect(page.getByRole('heading', { name: 'Create Account' })).toBeVisible();
  // await page.getByRole('textbox', { name: 'Fullname Fullname' }).fill("Audie Yose");
  // await page.getByRole('textbox', { name: 'Username Username' }).fill("aidiey");
  // await page.getByRole('textbox', { name: 'Email Email' }).fill("audieyose@gmail.com");
  // await page.getByRole('textbox', { name: 'Password Password' }).fill("Yoseaudi3");
  // await page.getByRole('textbox', { name: 'Password Confirmation' }).fill("Yoseaudi3");
  // await page.getByRole('button', { name: 'Register' }).click();
  // await expect(page.getByRole('heading', { name: 'Create Account Success' })).toBeVisible();
  // await page.getByText('Check your email for account');

//TC-03
  // await expect(page.getByRole('heading', { name: 'Create Account' })).toBeVisible();
  // await page.getByRole('textbox', { name: 'Fullname Fullname' }).fill("Bea Mine");
  // await page.getByRole('textbox', { name: 'Username Username' }).fill("baemine");
  // await page.getByRole('textbox', { name: 'Email Email' }).fill("baeminee@gmail.com");
  // await page.getByRole('textbox', { name: 'Password Password' }).fill("minebaee");
  // await page.getByRole('textbox', { name: 'Password Confirmation' }).fill("minebaee");
  // await page.getByRole('button', { name: 'Register' }).click();
  // await page.getByText('Request failed with status');

//TC-04
  await expect(page.getByRole('heading', { name: 'Create Account' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Fullname Fullname' }).fill("Audie Yose");
  await page.getByRole('textbox', { name: 'Username Username' }).fill("aidiey");
  await page.getByRole('textbox', { name: 'Email Email' }).fill("audieyose@gmail.com");
  await page.getByRole('textbox', { name: 'Password Password' }).fill("Yoseaudi3");
  await page.getByRole('textbox', { name: 'Password Confirmation' }).fill("Yoseaudi3");
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByText('Request failed with status');

  
//TC-05
//   await expect(page.getByRole('heading', { name: 'Create Account' })).toBeVisible();
//   await page.getByRole('textbox', { name: 'Fullname Fullname' }).fill("Anita Bath");
//   await page.getByRole('textbox', { name: 'Username Username' }).fill("anitab");
//   await page.getByRole('textbox', { name: 'Email Email' }).fill("anitabath@gmail.com");
//   await page.getByRole('textbox', { name: 'Password Password' }).fill("Anita122");
//   await page.getByRole('textbox', { name: 'Password Confirmation' }).fill("Anita112");
//   await page.getByRole('button', { name: 'Register' }).click();
//   await page.getByText('Password not match');
  
  
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
