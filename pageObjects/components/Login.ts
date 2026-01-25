import { type Locator, type Page } from "@playwright/test";
import { BasePageComponent } from "../base.pageComponent";

export default class Login extends BasePageComponent {
    constructor(
        page: Page, 
        locator = page.locator("#login_button_container")) {
        super(locator);
    }

    Fields = {
        Username: this.host.locator('.login-box').locator('#user-name'),
        Password: this.host.locator('.login-box').locator('#password'),
    };
    Buttons = {
        Login: this.host.locator('.login-box').locator('#login-button'),
    };
    }