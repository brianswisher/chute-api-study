import React from "react";

let {ROUTE} = require("./config/index").CONSTANTS;

class HomeScreen extends React.Component {
  render() {
    let content = null;

    if (typeof window === "object") {
      APP.navigate(ROUTE.ASSETS_SCREEN, true);
    }

    return content;
  }
}

export default HomeScreen;
