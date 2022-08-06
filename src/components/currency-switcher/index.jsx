import { Component, createRef } from "react";
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
    }
    toggleOverlay() {
        this.setState((state) => {
            return {...state, displayOverlay: !state.displayOverlay}
        })
    }
    render() {
        const currenciesList = this.state.displayOverlay ? 
                                <CurrenciesOverlay 
                                    toggle={() => this.toggleOverlay()} 
                                    setCurrency={(currency) => this.setCurrency(currency)}/> : null
        const currentCurrency = <div 
                                    className={styles.current} 
                                    onClick={() => this.toggleOverlay()}>
                                    <span>{this.state.currency}</span>
                                    <img className={this.state.displayOverlay ? styles.active : null} 
                                        src={dropdownSvg} 
                                        alt="" />
                                </div>
        return <div className={styles.switcher}>
            {currentCurrency}
            {currenciesList}
        </div>
    }
}

class CurrenciesOverlay extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClick(currency) {
        const {toggle, setCurrency} = this.props;
        setCurrency(currency.symbol)
        toggle() 
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
          this.props.toggle()
        }
    }
    render() {
        return <Query query={GET_CURRENCIES}>
            {
            ({loading, error, data}) => {
                if (loading) return <Loader className={styles.loader}/>;
                if (error) return <Error/>;
                const currenciesItems = data.currencies.map((currency, i) => 
                    <li key={i} 
                        onClick={() => this.handleClick(currency)}>
                        {currency.symbol} {currency.label}
                    </li>
                )
                return <ul ref={this.wrapperRef} className={styles.currenciesList}>
                    {currenciesItems}
                </ul> 
            }
            }
        </Query>
    }
}

export default CurrencySwitcher;