import { Component } from "react";
import styles from "./styles.module.scss";
import cartImg from "../../../../resources/icons/cart.svg";

class Product extends Component {
    render() {
        const {name, id, price, url, imgUrl} = this.props;
        const product = <div className={styles.card}>
            <div className={styles.thumbnail}>
                <img className={styles.image} src={imgUrl} alt={name} />
                <div className="stock">OUT OF STOCK</div>
                <div className="cart"><img src="" alt="" /></div>
            </div>
            <h3 className={styles.title}>{name}</h3>
            <div className={styles.price}>{price.currency.symbol}{price.amount}</div>
        </div> 
        return product
    }
}

export default Product;