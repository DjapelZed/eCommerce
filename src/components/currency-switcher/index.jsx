import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { GET_CURRENCIES } from "../../shared/dbapi";
import Loader from "../loader";
import Error from "../error";
import styles from "./styles.module.scss";
import dropdownSvg from "../../resources/icons/dropdown.svg";

class CurrencySwitcher extends Component {
    state = {
        currency: "$",
        displayOverlay: false
    }
    setCurrency(currency) {
        this.setState({currency: currency})
        this.toggleOverlay()
    }
    toggleOverlay() {
        this.setState((state) => {
            return {...state, displayOverlay: !state.displayOverlay}
        })
    }
    render() {
        const currenciesList = this.state.displayOverlay ? <CurrenciesOverlay setCurrency={(currency) => this.setCurrency(currency)}/> : null
        const currentCurrency = <div className={styles.current} onClick={() => this.toggleOverlay()}>
                <span>{this.state.currency}</span>
                <img className={this.state.displayOverlay ? styles.active : null} src={dropdownSvg} alt="" />
            </div>
        return <div className={styles.switcher}>
            {currentCurrency}
            {currenciesList}
        </div>
    }
}

class CurrenciesOverlay extends Component {
    render() {
       const {setCurrency} = this.props;
        return <Query query={GET_CURRENCIES}>
            {
            ({loading, error, data}) => {
                if (loading) return <Loader className={styles.loader}/>;
                if (error) return <Error/>;
                const currenciesItems = data.currencies.map((currency, i) => 
                <li key={i} onClick={() => setCurrency(currency.symbol)}>{currency.symbol} {currency.label}</li>
                )
                return <ul className={styles.currenciesList}>
                    {currenciesItems}
                </ul> 
            }
            }
        </Query>
    }
}

export default CurrencySwitcher;