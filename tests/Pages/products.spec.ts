import { test, expect } from '../../pageObjects/fixtures/pageFixtures';
const pageTitle = 'Products Page';
const appTitle = process.env.APPTITLE || '';

test(`${pageTitle} componenet validation`, async ({ authenticatedPage, ProductsPage }) => {
    /*
    In this test in lines 20, 21 and 26 I have used not.toBeEmpty 
    Previously I had toHaveText("Sauce Labs Backpack")
    I made this change as it removes the Hard coding of Product names.
    The locator for each tile appears 6 times in the html
    I'm not sure if my implementation now is best practice or not.
    */
    await expect(authenticatedPage.page).toHaveTitle(appTitle);
    await expect(ProductsPage.Header.PrimaryHeader.BurgerMenu).toBeVisible();
    await expect(ProductsPage.Header.PrimaryHeader.Title).toBeVisible();
    await expect(ProductsPage.Header.PrimaryHeader.Cart).toBeVisible();
    await expect(ProductsPage.Header.SecondaryHeader.Title).toBeVisible();
    await expect(ProductsPage.Header.SecondaryHeader.Filter).toBeVisible();
    await expect(ProductsPage.Products.Tiles.Names).toHaveCount(6);
    await expect(ProductsPage.Products.Tiles.Names.first()).not.toBeEmpty();
    await expect(ProductsPage.Products.Tiles.Names.nth(5)).not.toBeEmpty();
    await expect(ProductsPage.Products.Tiles.Image).toBeVisible();
    await expect(ProductsPage.Products.Tiles.Prices.first()).toHaveText(/\d+\.\d{2}/);  
    await expect(ProductsPage.Products.Tiles.AddToCartButtons).toHaveCount(6);
    await expect(ProductsPage.Products.Tiles.Description).toHaveCount(6);
    await expect(ProductsPage.Products.Tiles.Description.first()).not.toBeEmpty();
});

test(`${pageTitle} Burger Menu Validation`, async ({ authenticatedPage, ProductsPage }) => {
    await expect(authenticatedPage.page).toHaveTitle(appTitle);
    await expect(ProductsPage.BurgerMenu.Component.Icon).toBeVisible();
    await expect(ProductsPage.BurgerMenu.Component.Menu).toBeHidden();
    await ProductsPage.BurgerMenu.Component.Icon.click();
    await expect(ProductsPage.BurgerMenu.Component.Menu).toBeVisible();
    await expect(ProductsPage.BurgerMenu.Component.CloseButton).toBeVisible();
    await expect(ProductsPage.BurgerMenu.Component.Entries).toBeVisible();
    await ProductsPage.BurgerMenu.Component.CloseButton.click();
    await expect(ProductsPage.BurgerMenu.Component.Menu).toBeHidden();
});

test(`${pageTitle} Cart Validation`, async ({ authenticatedPage, ProductsPage }) => {
    await expect(authenticatedPage.page).toHaveTitle(appTitle);
    await expect(ProductsPage.Cart.Component.Icon).toBeVisible();
    await ProductsPage.Cart.Component.Icon.click();
    await expect(authenticatedPage.page).toHaveURL(/.*cart.html/);
    await authenticatedPage.page.goBack();
    await expect(authenticatedPage.page).toHaveURL(/.*inventory.html/);
});

test(`${pageTitle} Filter Validation`, async ({ authenticatedPage, ProductsPage }) => {
    await expect(authenticatedPage.page).toHaveTitle(appTitle);
    await expect(ProductsPage.Products.Tiles.Names.first()).toHaveText("Sauce Labs Backpack");
    await ProductsPage.Header.SecondaryHeader.Filter.click();
    await expect(ProductsPage.Filter.Component.Entries).toHaveCount(4);
    await ProductsPage.Filter.Component.List.selectOption('Name (Z to A)');
    await expect(ProductsPage.Products.Tiles.Names.first()).toHaveText("Test.allTheThings() T-Shirt (Red)");
    await ProductsPage.Header.SecondaryHeader.Filter.click();
    await ProductsPage.Filter.Component.List.selectOption('Price (low to high)');
    await expect(ProductsPage.Products.Tiles.Names.first()).toHaveText("Sauce Labs Onesie");
});
