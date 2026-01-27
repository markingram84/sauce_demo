import { type Locator, type Page } from "@playwright/test";
import { BasePageComponent } from "../base.pageComponent";

export default class Overview extends BasePageComponent {
    [x: string]: any;
    constructor(
        page: Page,
        locator = page.locator(".checkout_complete_container")) {
        super(locator);
    }

    Fields = {
        Complete: this.host.locator('.complete-text'),
    }
    Buttons = {
        BackHome: this.host.locator('#back-to-products'),
    }
}