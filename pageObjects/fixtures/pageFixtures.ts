import LoginPage from "../pages/loginPage.page.ts";
import { test as base } from "@playwright/test";

export type PageObjects = {
  loginPage: LoginPage;
};

const baseurl = process.env.BASEURL;

export const test = base.extend<PageObjects>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await use(loginPage);
  },
});

export { expect, Page, Locator, Response } from "@playwright/test";