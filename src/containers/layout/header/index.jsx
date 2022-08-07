import { Component } from "react";
import styles from "./styles.module.scss";
import brand from "../../../resources/icons/brand.svg";
import CurrencySwitcher from "../../../components/currency-switcher";
import CartOverlay from "../../../components/cart-overlay";

class Header extends Component {
    render() {
        return <header className={styles.header}>
        <nav className={styles.menu}>
            <ul className={styles.menuList}>
                <li className={styles.menuItem}><a href="">Category</a></li>
            </ul>
        </nav>
        <div className={styles.logo}>
            <a href="/">
                <img src={brand} alt="logo" />
            </a>
        </div>
        <div className={styles.rightGroup}>
            <CurrencySwitcher/>
            <CartOverlay/>
        </div>
        </header>
    }
}

export default Header;