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

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import "assets/css/myCss.css";
// pages for this kit
import LandingPage from "views/LandingPage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route
          path="/breatheTheOcean"
          render={(props) => <LandingPage {...props} />}
        />
        <Redirect to="/breatheTheOcean" />
        <Redirect from="/" to="/breatheTheOcean" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
