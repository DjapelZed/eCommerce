import { Component } from "react";
import styles from "./styles.module.scss";
import cartImg from "../../../../resources/icons/cart.svg";

class Product extends Component {
    render() {
        const {name, id, inStock, price, url, imgUrl} = this.props;
        const outOfStock = !inStock ? <div className={styles.stock}>OUT OF STOCK</div> : null 
        const outOfStockStyle = {color: !inStock ? "#8D8F9A" : ""}
        const product = <div className={styles.card}>
            <div className={styles.thumbnail}>
                <img className={styles.image} src={imgUrl} alt={name} />
                {outOfStock}
                <div className="cart"><img src="" alt="" /></div>
            </div>
            <h3 style={outOfStockStyle} className={styles.title}>{name}</h3>
            <div style={outOfStockStyle} className={styles.price}>{price.currency.symbol}{price.amount}</div>
        </div> 
        return product
    }
}

export default Product;