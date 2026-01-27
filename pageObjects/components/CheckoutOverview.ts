import { type Locator, type Page } from "@playwright/test";
import { BasePageComponent } from "../base.pageComponent";

export default class CheckoutOverview extends BasePageComponent {
    constructor(
        page: Page,
        locator = page.locator(".checkout_summary_container")) {
        super(locator);
    }

    Fields = {
        Total: this.host.locator('.summary_info').locator('.summary_total_label'),
    }
    Buttons = {
        Finish: this.host.locator('.cart_footer').locator('#finish'),
    }
}