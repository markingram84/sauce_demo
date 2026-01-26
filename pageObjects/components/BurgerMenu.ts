import { type Locator, type Page } from "@playwright/test";
import { BasePageComponent } from "../base.pageComponent";

export default class BurgerMenu extends BasePageComponent {
    constructor(
        page: Page,
        locator = page.locator("#header_container")) {
        super(locator);
    }

    Component = {
        Icon: this.host.locator('.primary_header').locator('#react-burger-menu-btn'),
        Menu: this.host.locator('.primary_header').locator('.bm-menu-wrap'),
        CloseButton: this.host.locator('.primary_header').locator('.bm-cross-button'),
        Entries: this.host.locator('.primary_header').locator('.bm-item-list'),
        Logout: this.host.locator('.primary_header').locator('#logout_sidebar_link')
}
}