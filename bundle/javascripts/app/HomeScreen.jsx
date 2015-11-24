import HomeScreenRuntime from "./HomeScreenRuntime";
import Chute from "./component/Chute";
import Radium from "radium";
import React from "react";
import { baseline } from "./config/index";

let styles = {
  container: {
    textAlign: "left"
  }
};

@Radium
class HomeScreen extends HomeScreenRuntime {
  constructor(props) {
    super(props);

    this.state = {
      runtime: false
    };
  }

  render() {
    const { i18n } = this.props;
    let { runtime } = this.state;

    return (
      <div style={styles.container}>
        <h1>{i18n.page_title}</h1>
        <Chute />
      </div>
    )
  }
}

export default HomeScreen;
