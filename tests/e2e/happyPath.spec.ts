import { test, expect } from '../../pageObjects/fixtures/pageFixtures';
import Products from '../../pageObjects/components/Products';

test(`Happy Path Test`, async ({ authenticatedPage }) => {
  await expect(authenticatedPage.page).toHaveTitle("Swag Labs");
  await expect (authenticatedPage.Products.Tiles.Names).toHaveCount(6); 
});

