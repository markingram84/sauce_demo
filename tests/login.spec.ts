import { test, expect } from '../pageObjects/fixtures/pageFixtures';
import Login from '../pageObjects/components/Login';
const pageTitle = 'Login';
const standarduser = process.env.STANDARDUSER || '';
const password = process.env.PASSWORD || '';

test(`${pageTitle} title validation`, async ({ loginPage }) => {
  await expect(loginPage.page).toHaveTitle("Swag Labs");
});

test(`${pageTitle} sample test`, async ({ loginPage }) => {
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
