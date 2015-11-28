import React from "react";
import ChuteEndpoints from "./ChuteEndpoints";
import ChuteRuntime from "./ChuteRuntime";

let {ROUTE} = require("../config/index").CONSTANTS;

class Chute extends ChuteRuntime {
  render() {
    const { i18n } = this.props;
    let content = null;

    if (this.state.errorMessage) {
      content = <div>{i18n.something_is_wrong}</div>;
    }

    if (!this.state.chutes.length) {
      content = <div>{i18n.loading}</div>;
    } else {
      APP.navigate(ROUTE.ALBUM_SCREEN, true);
    }

    return content;
  }
}

export default Chute;
