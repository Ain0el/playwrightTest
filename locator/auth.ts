import { Page, Locator } from '@playwright/test';
import { threadCpuUsage } from 'node:process';
 
export class RegisterPage {
  readonly page: Page;
  readonly createAccountText: Locator;
  readonly textBoxFullname: Locator;
  readonly textBoxUsername: Locator;
  readonly textBoxEmail: Locator;
  readonly textBoxPassword: Locator;
  readonly textBoxPassConfirm: Locator;
  readonly btnRegister: Locator;
  readonly textCreateSuccess: Locator;
  readonly textActivationEmail: Locator;
  readonly textFailedStatus: Locator;
  readonly textPasswordNotMatch: Locator;
 
 
  constructor(page: Page) {
    // Activity Log Page
    this.page = page;
    this.createAccountText = page.getByRole('heading', { name: 'Create Account' });
    this.textBoxFullname = page.getByRole('textbox', { name: 'Fullname' });
    this.textBoxUsername = page.getByRole('textbox', { name: 'Username' });
    this.textBoxEmail = page.getByRole('textbox', { name: 'Email' });
    this.textBoxPassword = page.getByRole('textbox', { name: 'Password' }).first();
    this.textBoxPassConfirm = page.getByRole('textbox', { name: 'Password' }).nth(1);
    this.btnRegister = page.getByRole('button', { name: 'Register' });
    this.textCreateSuccess = page.getByRole('heading', { name: 'Create Account Success' });
    this.textActivationEmail = page.getByText('Check your email for account');
    this.textFailedStatus = page.getByText('Request failed with status');
    this.textPasswordNotMatch = page.getByText('Password not match');
  }
}

export class LoginPage {
readonly page: Page;
readonly loginTitle: Locator;
readonly textBoxUsernameEmail: Locator;
readonly textBoxPassword: Locator;
readonly btnLogin: Locator;
readonly textErrorEmptyEmail: Locator;
readonly textErrorEmptyPassword: Locator;
readonly btnTogglePassword: Locator;
readonly textBoxPasswordVisible: Locator;

constructor(page: Page) {
this.page = page;
this.loginTitle = page.getByRole('heading', { name: 'Login' });
this.textBoxUsernameEmail = page.getByRole('textbox', { name: 'Email / Username Email /' });
this.textBoxPassword = page.getByRole('textbox', { name: 'Password Password' });
this.btnLogin = page.getByRole('button', { name: 'Login' });
this.textErrorEmptyEmail = page.getByText('Please input your email or');
this. textErrorEmptyPassword = page.getByText('Please input your password');
this.btnTogglePassword = page.getByRole('button').filter({ hasText: /^$/ });
this.textBoxPasswordVisible = page.getByRole('textbox', { name: 'Password Password' });

 }
}