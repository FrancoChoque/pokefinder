import React, { Component } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";


export class Layout extends Component {
  render() {
    return (
        <>
        <Toolbar />
        <main>{this.props.children}</main>
        </>
        );
  }
}

export default Layout;
