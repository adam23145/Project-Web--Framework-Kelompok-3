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
import ChatTeacher from "../pages/chat-teacher";
import ForgotPassword from "../pages/ForgotPassword";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <ProtectedRoute exact path="/" component={Dashboard} />
          <Route path="/landing" component={LandingPage}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/forgotPassword" component={ForgotPassword}></Route>
          <ProtectedRoute path="/dashboard" component={Dashboard}></ProtectedRoute>
          <ProtectedRoute path="/chat/:id" component={ChatTeacher}></ProtectedRoute>
          <ProtectedRoute path="/profile" component={Profile}></ProtectedRoute>
          <ProtectedRoute path="/admin-dashboard" component={AdminDashboard}></ProtectedRoute>
          <ProtectedRoute path="/admin" component={AdminTeacher}></ProtectedRoute>
          <ProtectedRoute path="/admin-dashboard" component={AdminDashboard}></ProtectedRoute>
          <ProtectedRoute path="/class" component={Dashboard_Class}></ProtectedRoute>
          <ProtectedRoute path="/schedule" component={PageNotFound}></ProtectedRoute>
          <ProtectedRoute path="/teachers" component={Dashboard_Teachers}></ProtectedRoute>
          <ProtectedRoute path="/students" component={AdminStudents}></ProtectedRoute>
          <ProtectedRoute path="/quiz" component={PageNotFound}></ProtectedRoute>
          <Route path="/404" component={PageNotFound}></Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
