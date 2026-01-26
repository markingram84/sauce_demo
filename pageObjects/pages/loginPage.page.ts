import { BasePage } from "../base.page";
import Login from "../components/Login.ts";
import Products from "../components/Products.ts";

export default class LoginPage extends BasePage {
    Login = new Login(this.page);
    Products = new Products(this.page);

    async open() {
        await super.open("/");
    }
}