import { test, expect } from '@playwright/test';

test('user can register', async ({ page }) => {
  await page.goto('/auth/login');

//TC-06
//   await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
//   await page.getByRole('textbox', { name: 'Email / Username Email /' }).fill("");
//   await page.getByRole('textbox', { name: 'Password Password' }).fill("Yoseaudi3");
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByText('Please input your email or');


//TC-07
//   await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
//   await page.getByRole('textbox', { name: 'Email / Username Email /' }).fill("aidiey");
//   await page.getByRole('textbox', { name: 'Password Password' }).fill("");
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByText('Please input your password');

//TC-08
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Email / Username Email /' }).fill("aidiey");
  await page.getByRole('textbox', { name: 'Password Password' }).fill("Yoseaudi3");
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await expect(page.getByRole('textbox', { name: 'Password Password' })).toHaveValue('Yoseaudi3');

});