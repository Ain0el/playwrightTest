import { Page, Locator } from '@playwright/test';
 
export class ActivityLogPage {
  readonly page: Page;
  readonly tableActivityLog: Locator;
 
  constructor(page: Page) {
    // Activity Log Page
    this.page = page;
    this.tableActivityLog = page.locator('div').filter({ hasText: 'UsernameRoleActivity' }).nth(5);
    
  }
}
 