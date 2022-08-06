import { Component } from "react";
import loader from "../../resources/loader.gif"

class Loader extends Component {
    render() {
        return <img src={loader} alt="Loading ..."/>
    }
}

export default Loader