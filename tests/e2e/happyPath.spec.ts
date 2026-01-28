import { test, expect } from '../../pageObjects/fixtures/pageFixtures';
const firstname = process.env.FIRSTNAME || '';
const lastname = process.env.LASTNAME || '';
const zipcode = process.env.ZIPCODE || '';
const appTitle = process.env.APPTITLE || '';

test(`Happy Path Test`, async ({ authenticatedPage, ProductsPage, YourCartPage, CustomerDetailsPage, CheckoutOverviewPage, OverviewPage }) => {
  await expect(authenticatedPage.page).toHaveTitle(appTitle);
  await ProductsPage.open();
  await ProductsPage.Products.addFirstNItemsToCart(4);
  await ProductsPage.Products.removeFirstNItemsFromCart(1);
  await ProductsPage.Cart.Component.Icon.click();
  await expect(YourCartPage.Basket.Component.Item).toHaveCount(3);
  await YourCartPage.Basket.Component.CheckoutButton.click();
  await CustomerDetailsPage.CustomerDetails.fillInformation({ firstName: firstname, lastName: lastname, zipCode: zipcode });
  await CustomerDetailsPage.CustomerDetails.Buttons.Continue.click();
  await expect(CheckoutOverviewPage.CheckoutOverview.Fields.Total).toBeVisible();
  await expect(CheckoutOverviewPage.CheckoutOverview.Fields.Total).toHaveText(/Total: \$\d+\.\d+/); //If  this was from an api I would try to mock this line
  await CheckoutOverviewPage.CheckoutOverview.Buttons.Finish.click();
  await expect(OverviewPage.Overview.Fields.Complete).toBeVisible();
  await OverviewPage.Overview.Buttons.BackHome.click();
});
