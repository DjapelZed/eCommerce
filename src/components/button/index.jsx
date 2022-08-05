import {Component} from "react";
import styles from "styles.module.scss";

class Button extends Component {
    handleClick(fn, href="") {
        fn();
        if (href) {
            window.open(href, "_self");
        }
    }
    render() {
        const {children, href, onClick, secondary, long, disabled} = this.props;
        const className = [
            styles.button,
            secondary ? styles.secondary : null,
            long ? styles.long : null
        ].join(' ');
        return <button onClick={() => this.handleClick(onClick, href)} 
                        disabled={disabled}
                        className={className}>
                        {children}
                </button>
    }
}

export default Button;