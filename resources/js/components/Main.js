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
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route path="/start" component={Home}/>
                    <Route path="/posts" component={Posts} />
                    <Route path="/logout" component={Logout} />
                </div>
            </Router>
        );
    }
}

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
