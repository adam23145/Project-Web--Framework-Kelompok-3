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
import Detail_Class from "../pages/Dashboard-Detail_Class";
import LoginTeacher from "../pages/LoginTeacher";
import RegisterTeacher from "../pages/RegisterTeacher";
import DashboardTeacher from "../pages/DashboardTeacher";
import DashboardTeacher_Class from "../pages/DashboardTeacher-Class";
import DashboardTeacher_DetailClass from "../pages/DashboardTeacher-DetailClass";
import DashboardTeacher_AddDataClass from "../pages/DashboardTeacher-AddDataClass";
import DashboardTeacher_Profile from "../pages/DashboardTeacher-Profile";
import DashboardTeacher_AllStudent from "../pages/DashboardTeacher-All Student";
import ChatStudent from "../pages/chat-student";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <ProtectedRoute exact path="/" component={Dashboard} />
          <ProtectedRoute exact path="/dashboard-teacher" component={DashboardTeacher} />
          <ProtectedRoute exact path="/dashboard-teacher/class" component={DashboardTeacher_Class} />
          <ProtectedRoute exact path="/dashboard-teacher/class/detailClass/:id" component={DashboardTeacher_DetailClass} />
          <ProtectedRoute exact path="/dashboard-teacher/class/addClass" component={DashboardTeacher_AddDataClass} />
          <ProtectedRoute exact path="/dashboard-teacher/viewstudent" component={DashboardTeacher_AllStudent} />
          <ProtectedRoute exact path="/dashboard-teacher/profile" component={DashboardTeacher_Profile} />
          <ProtectedRoute path="/dashboard-teacher/chat/:id" component={ChatStudent}></ProtectedRoute>
          <Route path="/landing" component={LandingPage}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/loginTeacher" component={LoginTeacher}></Route>
          <Route path="/registerTeacher" component={RegisterTeacher}></Route>
          <Route path="/forgotPassword" component={ForgotPassword}></Route>
          <ProtectedRoute path="/dashboard" component={Dashboard}></ProtectedRoute>
          <ProtectedRoute path="/chat/:id" component={ChatTeacher}></ProtectedRoute>
          <ProtectedRoute path="/profile" component={Profile}></ProtectedRoute>
          <ProtectedRoute path="/admin-dashboard" component={AdminDashboard}></ProtectedRoute>
          <ProtectedRoute path="/admin" component={AdminTeacher}></ProtectedRoute>
          <ProtectedRoute path="/admin-dashboard" component={AdminDashboard}></ProtectedRoute>
          <ProtectedRoute path="/class" component={Dashboard_Class}></ProtectedRoute>
          <ProtectedRoute path="/view/:id" component={Detail_Class}></ProtectedRoute>
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
