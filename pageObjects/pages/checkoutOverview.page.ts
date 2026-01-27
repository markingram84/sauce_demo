import { BasePage } from "../base.page";
import CheckoutOverview from "../components/CheckoutOverview";

export default class CheckoutOverviewPage extends BasePage {
    CheckoutOverview = new CheckoutOverview(this.page);

    async open() {
        await super.open("/checkout-step-two.html");
    }
}