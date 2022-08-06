import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import Product from "./components/product";
import Loader from "../../components/loader";
import Error from "../../components/error";
import styles from "./styles.module.scss";
import { GET_ALL_PRODUCTS } from "../../shared/dbapi";

class CategoryPage extends Component {
    render() {
        const {category} = this.props;
        const products = <Query query={GET_ALL_PRODUCTS}>
            {
                ({loading, error, data}) => {
                    if (loading) return <Loader/>
                    if (error) return <Error/>
                    const items = data.category.products.map(product => {
                        return <Product
                                key={product.id} 
                                name={product.name}
                                price={product.prices[0]}
                                inStock={product.inStock}
                                id={product.id}
                                url=""
                                imgUrl={product.gallery[0]}
                                />
                    });
                    return items;
                }
            }
        </Query>
        return <div className={styles.wrapper}>
            <h2 className={styles.title}>{category}</h2>
            <div className={styles.container}>
                {products}
            </div>
        </div>
    }
}

export default CategoryPage;