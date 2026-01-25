import { type Locator, type Page } from "@playwright/test";
import { BasePageComponent } from "../base.pageComponent";

export default class Products extends BasePageComponent {
    constructor(
        page: Page,
        locator = page.locator("#inventory_container")) {
        super(locator);
    }

    Tiles = {
        Names: this.host.locator('.inventory_item').locator('.inventory_item_label'),
    };
}