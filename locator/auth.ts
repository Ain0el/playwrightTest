import { Page, Locator } from '@playwright/test';
import { AsyncLocalStorageOptions } from 'node:async_hooks';
import { threadCpuUsage } from 'node:process';
 
export class RegisterPage {
  readonly page: Page;
  readonly createRegistrasiText: Locator;
  readonly textBuatAkun: Locator;
  readonly imgLogo: Locator;
  readonly textNamaLengkap: Locator;
  readonly textBoxUsername: Locator;
  readonly textBoxEmail: Locator;
  readonly textBoxPassword: Locator;
  readonly textBoxPassConfirm: Locator;
  readonly clickCheckbox: Locator;
  readonly btnBuatAkun: Locator;
  readonly btnAgree: Locator;
  readonly textMinKarakterPass: Locator;
  readonly textHurufBesarPass: Locator;
  readonly textAngkaPass: Locator;
  
  constructor(page: Page) {
    // Activity Log Page
    this.page = page;
    this.createRegistrasiText = page.getByRole('heading', { name: 'Registrasi' });
    this.textBuatAkun= page.getByText('Buat akun untuk menggunakan');
    this.imgLogo = page.getByRole('img', { name: 'logo' }).nth(1);
    this.textNamaLengkap = page.getByRole('textbox', { name: 'Nama Lengkap' });
    this.textBoxUsername = page.getByRole('textbox', { name: 'Username' });
    this.textBoxEmail = page.getByRole('textbox', { name: 'Email' });
    this.textBoxPassword = page.getByRole('textbox', { name: 'Password', exact: true });
    this.textBoxPassConfirm = page.getByRole('textbox', { name: 'Konfirmasi Password' });
    this.clickCheckbox = page.getByRole('checkbox', { name: 'Saya sudah memahami' });
    this.btnBuatAkun = page.getByRole('button', { name: 'Buat Akun' });
    this.btnAgree = page.getByRole('button', { name: 'Saya Memahami dan Menyetujui' });
    this.textMinKarakterPass = page.getByText('Minimal 8 karakter');
    this.textHurufBesarPass = page.getByText('Harus mengandung huruf besar');
    this.textAngkaPass = page.getByText('Harus mengandung angka');
  }
}

export class LoginPage {
   readonly page: Page;
   readonly imgLogo: Locator;
   readonly masukTitle: Locator;
   readonly textSelamatDatang: Locator;
   readonly textBoxEmail: Locator;
   readonly textBoxPassword: Locator;
   readonly btnMasuk: Locator;
   readonly textInputPass: Locator;
   readonly textInputEmail: Locator;
   readonly textEmailPassSalah: Locator;

   constructor(page: Page) {
     this.page = page;
     this.imgLogo = page.getByRole('img', { name: 'logo' }).first();
     this.masukTitle = page.getByRole('heading', { name: 'Masuk' });
     this.textSelamatDatang = page.getByText('Selamat datang di platform');
     this.textBoxEmail = page.getByRole('textbox', { name: 'Email' });
     this.textBoxPassword = page.getByRole('textbox', { name: 'Password' });
     this.btnMasuk = page.getByRole('button', { name: 'Masuk' });
     this.textInputPass = page.getByText('Masukkan Password');
     this.textInputEmail = page.getByText('Masukkan Email');
     this.textEmailPassSalah = page.getByText('Email dan password tidak');


  }
}
