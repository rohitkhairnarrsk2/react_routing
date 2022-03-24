import React from "react";
import Users from "./users";
import Post from "./post";
import { Route } from "react-router-dom";
import SideBar from "./sidebar";
const Dashboard = () => {
  return (
    <React.Fragment>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Route path="/admin" exact component={Users}></Route>
      <Route path="/admin/post" component={Post}></Route>
    </React.Fragment>
  );
};

export default Dashboard;
