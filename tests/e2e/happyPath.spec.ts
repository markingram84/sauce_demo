import { test, expect } from '../../pageObjects/fixtures/pageFixtures';

test(`Happy Path Test`, async ({ authenticatedPage, ProductsPage, YourCartPage }) => {
  await expect(authenticatedPage.page).toHaveTitle("Swag Labs");
  await expect(authenticatedPage.page).toHaveURL(/.*cart.html/);
  await ProductsPage.Products.Tiles.AddToCartButtons.nth(0).click();
  await ProductsPage.Products.Tiles.AddToCartButtons.nth(2).click();
  await ProductsPage.Products.Tiles.AddToCartButtons.nth(4).click();
  await ProductsPage.Products.Tiles.AddToCartButtons.nth(3).click();
  await ProductsPage.Cart.Component.Icon.click();
  await expect(authenticatedPage.page).toHaveURL(/.*cart.html/);
  await expect(YourCartPage.Basket.Component.Item).toHaveCount(4);
  //Remove Fleece Jacket
  //Click on Cart
  //Assert Cart is correct
  //Click on Checkout
  //Fill in Checkout Info from .env
  //Continue to Overview
  //Assert Overview is correct
  //Finish
  //Assert complete screen
  //Click back home
  //Assert on home screen
});