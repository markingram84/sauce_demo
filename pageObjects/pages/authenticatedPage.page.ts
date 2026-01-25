import Login from "../components/Login.ts";
import Products from "../components/Products.ts";
import { BasePage } from "../base.page.ts";

export default class AuthenticatedPage extends BasePage {
    Login = new Login(this.page);
    Products = new Products(this.page);

  async open() {
    await this.page.goto(process.env.BASEURL || "");
  }

  async loginState(username: string, password: string) {
    await this.Login.Fields.Username.fill(username);
    await this.Login.Fields.Password.fill(password);
    await this.Login.Buttons.Login.click();
  }
}