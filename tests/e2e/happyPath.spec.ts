import { test, expect } from '../../pageObjects/fixtures/pageFixtures';
import Products from '../../pageObjects/components/Products';

test(`Happy Path Test`, async ({ authenticatedPage, ProductsPage }) => {
  await expect(authenticatedPage.page).toHaveTitle("Swag Labs");
  await expect(ProductsPage.Products.Tiles.Names).toHaveCount(6);
  await expect(ProductsPage.Products.Tiles.Names.filter({ hasText: "Sauce Labs Backpack" })).toBeVisible();
  await expect(ProductsPage.Products.Tiles.Names.filter({ hasText: "Test.allTheThings() T-Shirt (Red)" })).toBeVisible();
});