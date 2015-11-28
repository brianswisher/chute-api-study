import AssetsRuntime from "./AssetsRuntime";
import React from "react";

let {ROUTE} = require("../config/index").CONSTANTS;

class Assets extends AssetsRuntime {
  render() {
    const { i18n } = this.props;
    let content = null;

    if (this.state.errorMessage) {
      content = <div>{i18n.something_is_wrong}</div>;
    }

    if (!this.state.albums.length) {
      content = <div>+++ {i18n.loading} {i18n.assets}</div>;
    } else {
      content = <div>Asset</div>;
    }

    return content;

  }
}

export default Assets;
