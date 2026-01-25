import { BasePage } from "../base.page";
import Login from "../components/Login.ts";

export default class LoginPage extends BasePage {
    Login = new Login(this.page);

    async open() {
        await super.open("/");        
    }
}