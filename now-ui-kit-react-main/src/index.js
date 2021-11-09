/*

=========================================================
* Now UI Kit React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//로그인 체크
import PrivateRoute from 'components/Custom/PrivateRoute';
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import LandingPage2 from "views/examples/LandingPage2.js";
import ProfilePage from "views/examples/ProfilePage.js";
import SelectData from "views/examples/SelectData.js";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons" render={(props) => <NucleoIcons {...props} />}
        />
        <PrivateRoute exact path="/landing-page" 
                component={LandingPage} />
        <PrivateRoute exact path="/landing-page2" 
                component={LandingPage2} />
        <PrivateRoute exact path="/selectData" 
                component={SelectData} />
        {/* <PrivateRoute exact path="/landing-page" 
                render={(props) =>  <LandingPage {...props} />} /> */}
        {/* <Route
          path="/landing-page"
          render={(props) =>  localStorage.getItem('users')?(
            <LandingPage {...props} />
          ):(
            <LoginPage {...props} />
          )}
          render={(props) =>  <LandingPage {...props} />}
        /> */}
        {/* <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        /> */}
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Redirect to="/landing-page" />
        <Redirect from="/landing-page" to="/landing-page" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
