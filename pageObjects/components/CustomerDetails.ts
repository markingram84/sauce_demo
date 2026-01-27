import { type Locator, type Page } from "@playwright/test";
import { BasePageComponent } from "../base.pageComponent";

interface CustomerData {
  firstName: string;
  lastName: string;
  zipCode: string;
}

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

async fillInformation(data: CustomerData): Promise<void> {
  await this.Fields.FirstName.fill(data.firstName);
  await this.Fields.LastName.fill(data.lastName);
  await this.Fields.ZipCode.fill(data.zipCode);
}    

}