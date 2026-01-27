import { type Locator, type Page } from "@playwright/test";
import { BasePageComponent } from "../base.pageComponent";

export default class CustomerDetails extends BasePageComponent {
    constructor(
        page: Page,
        locator = page.locator(".checkout_info_wrapper")) {
        super(locator);
    }

    Fields = {
        FirstName: this.host.locator('.form_group').locator('#first-name'),
        LastName: this.host.locator('.form_group').locator('#last-name'),
        ZipCode: this.host.locator('.form_group').locator('#postal-code')
    }
    Buttons = {
        Continue: this.host.locator('.checkout_buttons').locator('#continue'),
    }
}