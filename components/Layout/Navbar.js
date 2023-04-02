import React, { Component } from "react";
import TopPanel from "./TopPanel";
import TopHeader from "./TopHeader";
import MegaMenu from "./MegaMenu";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <TopPanel />
        <TopHeader />
        <MegaMenu />
      </React.Fragment>
    );
  }
}

export default Navbar;
