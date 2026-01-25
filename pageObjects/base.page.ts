import { type Page } from "@playwright/test";
import Login from "./components/Login";


export abstract class BasePage {
    public login: Login;

    constructor(readonly page: Page) {
        this.login = new Login(this.page);
    }

    async open(path: string) {
        await this.page.goto(path);
    }
}