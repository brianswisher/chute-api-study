import AssetStore from "../store/AssetStore";
import AssetAction from "../action/AssetAction";
import React from "react";
import Vunit from "vunit";
import { baseline } from "../config/index";

let px = new Vunit(baseline.width, "w");

class AssetsRuntime extends React.Component {
  constructor(props) {
    super(props);

    this.state = AssetStore.getState();
    this.state.style = {
      root: {
        fontFamily: "Helvetica Neue, Helvetica, Roboto, Arial",
        fontSize: px(16),
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 1440,
        textAlign: "center"
      },
      banner: {
        backgroundImage: "url(/banner.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 0",
        backgroundSize: "cover",
        height: "34vw",
        maxHeight: 486,
      },
      frame: {
        backgroundColor: "#999",
        boxSizing: "border-box",
        display: "inline-block",
        height: px(70),
        margin: `${px(20)} ${px(10)} 0`,
        width: px(70)
      }
    };

    this.onChange = onChange.bind(this);
  }

  componentDidMount() {
    AssetStore.listen(this.onChange);

    AssetAction.fetchAssets();
  }

  componentWillUnmount() {
    AssetStore.unlisten(this.onChange);
  }
}

function onChange(state) {
  this.setState(state);
}

export default AssetsRuntime;
