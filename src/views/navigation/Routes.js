import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Principal from "../components/principal";
import history from './history'
import NavBar from "./NavBar";

export default class Routes extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <Router history={history}>
                <NavBar />
                <Switch>
                   <Principal/> 

                </Switch>
            </Router>
        )
    }
}