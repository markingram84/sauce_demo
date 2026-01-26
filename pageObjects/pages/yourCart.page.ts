import { BasePage } from "../base.page";
import Basket from "../components/Basket.ts";

export default class YourCartPage extends BasePage {
    Basket = new Basket(this.page);

    async open() {
        await super.open("/cart.html");
    }
}