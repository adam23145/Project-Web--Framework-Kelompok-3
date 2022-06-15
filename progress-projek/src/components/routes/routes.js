import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminStudents from "../pages/admin-students";
import AdminTeacher from "../pages/admin-teachers";
import Dashboard_Class from "../pages/Dashboard-Class";
import PageNotFound from "../pages/404";
import Dashboard_Teachers from "../pages/Dashboard-Teachers";

import ProtectedRoute from "./ProtectedRoute";
import AdminDashboard from "../pages/admin-dashboard";
import Profile from "../pages/Dashboard-Profile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <ProtectedRoute exact path="/" component={Dashboard} />
          <Route path="/landing" component={LandingPage}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <ProtectedRoute path="/dashboard" component={Dashboard}></ProtectedRoute>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/admin-dashboard" component={AdminDashboard}></Route>
          <Route path="/admin" component={AdminTeacher}></Route>
          <Route path="/admin-dashboard" component={AdminDashboard}></Route>
          <Route path="/class" component={Dashboard_Class}></Route>
          <Route path="/schedule" component={PageNotFound}></Route>
          <Route path="/teachers" component={Dashboard_Teachers}></Route>
          <Route path="/students" component={AdminStudents}></Route>
          <Route path="/quiz" component={PageNotFound}></Route>
          <Route path="/404" component={PageNotFound}></Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
