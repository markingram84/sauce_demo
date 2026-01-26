import { test, expect } from '../../pageObjects/fixtures/pageFixtures';
import Products from '../../pageObjects/components/Products';

test(`Happy Path Test`, async ({ authenticatedPage, ProductsPage }) => {
  await expect(authenticatedPage.page).toHaveTitle("Swag Labs");
  //Add Backpack to Cart
  //Add Bolt t-shirt
  //Add Onesie to Cart
  //Add Fleece
  //Remove Fleexe
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