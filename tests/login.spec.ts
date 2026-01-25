import { test, expect } from '../pageObjects/fixtures/pageFixtures';
import Login from '../pageObjects/components/Login';
const pageTitle = 'Login';
const standarduser = process.env.STANDARDUSER || '';
const lockedoutuser = process.env.LOCKEDOUTUSER || '';
const password = process.env.PASSWORD || '';

test(`${pageTitle} title validation`, async ({ loginPage }) => {
  await expect(loginPage.page).toHaveTitle("Swag Labs");
});

test(`${pageTitle} Standard User Login`, async ({ loginPage }) => {
  await expect(loginPage.login.Fields.Username).toBeVisible();
  await expect(loginPage.login.Fields.Username).toBeEmpty();
  await loginPage.login.Fields.Username.fill(standarduser);
  await expect(loginPage.login.Fields.Username).toHaveValue(standarduser);
  await expect(loginPage.login.Fields.Password).toBeVisible();
  await expect(loginPage.login.Fields.Password).toBeEmpty();
  await loginPage.login.Fields.Password.fill(password);
  await expect(loginPage.login.Buttons.Login).toBeVisible();
  await loginPage.login.Buttons.Login.click();
  await expect(loginPage.page).toHaveURL(/.*inventory.html/);
});

test(`${pageTitle} Locked Out User Login`, async ({ loginPage }) => {
  await expect(loginPage.login.Fields.Username).toBeVisible();
  await expect(loginPage.login.Fields.Username).toBeEmpty();
  await loginPage.login.Fields.Username.fill(lockedoutuser);
  await expect(loginPage.login.Fields.Username).toHaveValue(lockedoutuser);
  await expect(loginPage.login.Fields.Password).toBeVisible();
  await expect(loginPage.login.Fields.Password).toBeEmpty();
  await loginPage.login.Fields.Password.fill(password);
  await expect(loginPage.login.Buttons.Login).toBeVisible();
  await loginPage.login.Buttons.Login.click();
  await expect(loginPage.login.Message.Error).toBeVisible();
});
