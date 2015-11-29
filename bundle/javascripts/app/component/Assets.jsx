import AssetsRuntime from "./AssetsRuntime";
import Radium from "radium";
import React from "react";

let {ROUTE} = require("../config/index").CONSTANTS;

@Radium
class Assets extends AssetsRuntime {
  render() {
    const { i18n } = this.props;
    let content = null;

    if (this.state.errorMessage) {
      content = <div>{i18n.something_is_wrong}</div>;
    }

    if (!this.state.assets.length) {
      content = <div>{i18n.loading}...</div>;
    } else {
      content = (
        <div style={this.state.style.root}>
          <div style={this.state.style.banner}/>
          <div style={this.state.style.frame}/>
          <div style={this.state.style.frame}/>
          <div style={this.state.style.frame}/>
          <div style={this.state.style.frame}/>
          <div style={this.state.style.frame}/>
          <div style={this.state.style.frame}/>
          <div style={this.state.style.frame}/>
          <div style={this.state.style.frame}/>
        </div>
      );
    }

    return content;

  }
}

export default Assets;
