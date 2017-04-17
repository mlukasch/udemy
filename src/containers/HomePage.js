import React, {Component} from 'react';
import '../resources/App.css';
import {test} from "../actions";
import {connect} from "react-redux";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Home Page</h1>
                <button onClick={this.props.test}>Test</button>
            </div>
        );
    }
}

export default connect(null, {test})(App);
