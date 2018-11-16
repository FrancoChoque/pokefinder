import React, { Component } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import styles from "./Layout.module.css"


export class Layout extends Component {
  render() {
    return (
        <>
        <Toolbar />
        <main className={styles.content}>{this.props.children}</main>
        </>
        );
  }
}

export default Layout;
