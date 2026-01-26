import { test, expect } from '../../pageObjects/fixtures/pageFixtures';
import Products from '../../pageObjects/components/Products';
const pageTitle = 'Products Page';

test(`${pageTitle} componenet validation`, async ({ authenticatedPage, ProductsPage }) => {
    await expect(authenticatedPage.page).toHaveTitle("Swag Labs");
    await expect(ProductsPage.Header.PrimaryHeader.BurgerMenu).toBeVisible();
    await expect(ProductsPage.Header.PrimaryHeader.Title).toHaveText("Swag Labs");
    await expect(ProductsPage.Header.PrimaryHeader.Cart).toBeVisible();
    await expect(ProductsPage.Header.SecondaryHeader.Title).toBeVisible();
    await expect(ProductsPage.Header.SecondaryHeader.Filter).toBeVisible();
    await expect(ProductsPage.Products.Tiles.Names).toHaveCount(6);
    await expect(ProductsPage.Products.Tiles.Names.filter({ hasText: "Sauce Labs Backpack" })).toBeVisible();
    await expect(ProductsPage.Products.Tiles.Names.filter({ hasText: "Test.allTheThings() T-Shirt (Red)" })).toBeVisible();
    await expect(ProductsPage.Products.Tiles.Image).toBeVisible();
    await expect(ProductsPage.Products.Tiles.Prices.filter({ hasText: "29.99" })).toBeVisible();
    await expect(ProductsPage.Products.Tiles.AddToCartButtons).toHaveCount(6);
    await expect(ProductsPage.Products.Tiles.Description).toHaveCount(6);
    await expect(ProductsPage.Products.Tiles.Description.filter({ hasText: "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton." })).toBeVisible();
});

test(`${pageTitle} Burger Menu Validation`, async ({ authenticatedPage, ProductsPage }) => {
    await expect(authenticatedPage.page).toHaveTitle("Swag Labs");
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
    await expect(authenticatedPage.page).toHaveTitle("Swag Labs");
    await expect(ProductsPage.Cart.Component.Icon).toBeVisible();
    await ProductsPage.Cart.Component.Icon.click();
    await expect(authenticatedPage.page).toHaveURL(/.*cart.html/);
    await authenticatedPage.page.goBack();
    await expect(authenticatedPage.page).toHaveURL(/.*inventory.html/);
});

test(`${pageTitle} Filter Validation`, async ({ authenticatedPage, ProductsPage }) => {
    await expect(authenticatedPage.page).toHaveTitle("Swag Labs");
    await expect(ProductsPage.Products.Tiles.Names.first()).toHaveText("Sauce Labs Backpack");
    await expect(ProductsPage.Products.Tiles.Names.nth(5)).toHaveText("Test.allTheThings() T-Shirt (Red)");
    //click on filter
    //assert 4 options
    //Select Z-A
    //Assert first item is Test.allTheThings() T-Shirt (Red)
    //Assert last item is Sauce Labs Backpack
    //click on filter
    //Select Low to High
    //Assert first item is Sauce Labs Onesie
    //Assert last item is Sauce Labs Fleece Jacket

});  
