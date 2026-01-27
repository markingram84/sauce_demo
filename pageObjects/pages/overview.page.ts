import { BasePage } from "../base.page";
import Overview from "../components/Overview.ts";

export default class CheckoutOverviewPage extends BasePage {
    Overview = new Overview(this.page);

    async open() {
        await super.open("/checkout-complete.html");
    }
}