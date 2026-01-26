import { type Locator, type Page } from "@playwright/test";
import { BasePageComponent } from "../base.pageComponent";

export default class Products extends BasePageComponent {
    constructor(
        page: Page,
        locator = page.locator("#inventory_container")) {
        super(locator);
    }

    Tiles = {
        Names: this.host.locator('.inventory_item').locator('.inventory_item_name'),
        Image: this.host.locator('.inventory_item').getByRole('img', { name: 'Sauce Labs Backpack' }),
        Prices: this.host.locator('.inventory_item').locator('.inventory_item_price'),
        AddToCartButtons: this.host.locator('.inventory_item').locator('button.btn_inventory'),
        Description: this.host.locator('.inventory_item').locator('.inventory_item_desc'),
    };
}