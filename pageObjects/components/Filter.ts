import { type Locator, type Page } from "@playwright/test";
import { BasePageComponent } from "../base.pageComponent";

export default class Filter extends BasePageComponent {
    constructor(
        page: Page,
        locator = page.locator("#header_container")) {
        super(locator);
    }

    Component = {
        Entries: this.host.locator('.header_secondary_container').locator('.product_sort_container').locator('option'),
        List: this.host.locator('.header_secondary_container').locator('.product_sort_container'),
}
}