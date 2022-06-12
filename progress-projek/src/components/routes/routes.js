import React from "react";
import {Switch, Route} from 'react-router-dom'
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";

function App(){
    return(
        <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
        </Switch>
    );
}

export default App;