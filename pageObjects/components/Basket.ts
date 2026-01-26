import { type Locator, type Page } from "@playwright/test";
import { BasePageComponent } from "../base.pageComponent";

export default class Basket extends BasePageComponent {
    constructor(
        page: Page,
        locator = page.locator("#cart_list")) {
        super(locator);
    }

    Component = {
        Item: this.host.locator('.cart_item'),
}
}