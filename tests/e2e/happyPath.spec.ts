import { test, expect } from '../../pageObjects/fixtures/pageFixtures';
const firstname = process.env.FIRSTNAME || '';
const lastname = process.env.LASTNAME || '';
const zipcode = process.env.ZIPCODE || '';

test(`Happy Path Test`, async ({ authenticatedPage, ProductsPage, YourCartPage, CustomerDetailsPage, CheckoutOverviewPage, OverviewPage }) => {
  await ProductsPage.open();
  const allButtons = ProductsPage.Products.Tiles.AddToCartButtons;
  const count = await allButtons.count();
  for (let i = 0; i < count - 1; i++) {
    await allButtons.nth(i).click();
  }
  // await ProductsPage.Products.Tiles.RemoveFromCartButtons.nth(2).click();
  await ProductsPage.Cart.Component.Icon.click();
  await expect(YourCartPage.Basket.Component.Item).toHaveCount(5); //Is this what I want?
  await YourCartPage.Basket.Component.CheckoutButton.click();
  await CustomerDetailsPage.CustomerDetails.Fields.FirstName.fill(firstname); //Can I do this in one line? 
  await CustomerDetailsPage.CustomerDetails.Fields.LastName.fill(lastname);
  await CustomerDetailsPage.CustomerDetails.Fields.ZipCode.fill(zipcode);
  await CustomerDetailsPage.CustomerDetails.Buttons.Continue.click();
  await expect(CheckoutOverviewPage.CheckoutOverview.Fields.Total).toBeVisible();
  // await expect(CheckoutOverviewPage.CheckoutOverview.Fields.Total).toHaveText(/Total:\s*\$\s*58\.29/); //Can I mock this?
  await CheckoutOverviewPage.CheckoutOverview.Buttons.Finish.click();
  await expect(OverviewPage.Overview.Fields.Complete).toBeVisible();
  await OverviewPage.Overview.Buttons.BackHome.click();
  await expect(authenticatedPage.page).toHaveURL(/.*inventory.html/);
});
