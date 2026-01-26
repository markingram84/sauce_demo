import { BasePage } from "../base.page";
import Products from "../components/Products.ts";
import Header from "../components/Header.ts";
import BurgerMenu from "../components/BurgerMenu.ts";
import Cart from "../components/Cart.ts";
import Filter from "../components/Filter.ts";

export default class ProductsPage extends BasePage {
    Products = new Products(this.page);
    Header = new Header(this.page);
    BurgerMenu = new BurgerMenu(this.page);
    Cart = new Cart(this.page);
    Filter = new Filter(this.page);

    async open() {
        await super.open("/inventory.html");        
    }
}