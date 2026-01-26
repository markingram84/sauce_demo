import LoginPage from "../pages/loginPage.page.ts";
import AuthenticatedPage from "../pages/authenticatedPage.page.ts";
import ProductsPage from "../pages/products.page.ts";
import YourCartPage from "../pages/yourCart.page.ts";
import { test as base } from "@playwright/test";

export type PageObjects = {
  loginPage: LoginPage;
  authenticatedPage: AuthenticatedPage;
  ProductsPage: ProductsPage;
  YourCartPage: YourCartPage;
};

const baseurl = process.env.BASEURL;
const standarduser = process.env.STANDARDUSER || '';
const password = process.env.PASSWORD || '';

export const test = base.extend<PageObjects>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await use(loginPage);
  },
  authenticatedPage: async ({ page }, use) => {
    const authenticatedPage = new AuthenticatedPage(page);
    await authenticatedPage.open();
    await authenticatedPage.loginState(standarduser, password);
    await use(authenticatedPage);
  },
  ProductsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);
    await productsPage.open();
    await use(productsPage);
  },
  YourCartPage: async ({ page }, use) => {
    const yourCartPage = new YourCartPage(page);
    await yourCartPage.open();
    await use(yourCartPage);
  },
});

export { expect, Page, Locator, Response } from "@playwright/test";