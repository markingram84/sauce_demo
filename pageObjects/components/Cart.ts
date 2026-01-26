import { type Locator, type Page } from "@playwright/test";
import { BasePageComponent } from "../base.pageComponent";

export default class Cart extends BasePageComponent {
    constructor(
        page: Page,
        locator = page.locator("#header_container")) {
        super(locator);
    }

    Component = {
        Icon: this.host.locator('.primary_header').locator('.shopping_cart_link'),
}
}