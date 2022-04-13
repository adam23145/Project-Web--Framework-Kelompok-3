import React from "react";
import {Switch, Route} from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import Dashboard_Class from "./components/Dashboard-Class";
import Dashboard_DetailClass from "./components/Dashboard-DetailClass";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard_Teachers from "./components/Dashboard-Teachers";
import PageNotFound from "./components/404";
import Admin from "./components/admin";
import AdminStudents from "./components/admin-students";

function MyRouter(){
    return(
        <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/admin" component={Admin}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/courses" component={Dashboard_Class}></Route>
            <Route path="/schedule" component={PageNotFound}></Route>
            <Route path="/course/:matkulId" component={Dashboard_DetailClass}></Route>
            <Route path="/teachers" component={Dashboard_Teachers}></Route>
            <Route path="/students" component={AdminStudents}></Route>
            <Route path="/quiz" component={PageNotFound}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/" component={LandingPage}></Route>
        </Switch>
    );
}

export default MyRouter;