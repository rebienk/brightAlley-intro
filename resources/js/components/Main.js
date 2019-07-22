import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import Logout from "./Logout";
import './styling/main.css'

class Main extends Component {
    render() {
        return (

            <Router >
                <div className="navbar">

                    <hr />

                    <Route path="/start" component={Posts}/>
                </div>
            </Router>
        );
    }
}

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
