import { type Locator, type Page } from "@playwright/test";
import { BasePageComponent } from "../base.pageComponent";

export default class Header extends BasePageComponent {
    constructor(
        page: Page,
        locator = page.locator("#header_container")) {
        super(locator);
    }

    PrimaryHeader = {
        BurgerMenu: this.host.locator('.primary_header').locator('#react-burger-menu-btn'),
        Title: this.host.locator('.primary_header').locator('.app_logo'),
        Cart: this.host.locator('.primary_header').locator('.shopping_cart_container'),
    };
    SecondaryHeader = {
        Title: this.host.locator('.header_secondary_container').locator('.title'),
        Filter: this.host.locator('.header_secondary_container').locator('.select_container'),
    };
}