import { BasePage } from "../base.page";
import CustomerDetails from "../components/CustomerDetails.ts";

export default class CustomerDetailsPage extends BasePage {
    CustomerDetails = new CustomerDetails(this.page);

    async open() {
        await super.open("/checkout-step-one.html");
    }
}