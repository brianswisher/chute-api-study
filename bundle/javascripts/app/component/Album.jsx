import AlbumRuntime from "./AlbumRuntime";
import React from "react";

let {ROUTE} = require("../config/index").CONSTANTS;

class Album extends AlbumRuntime {
  render() {
    const { i18n } = this.props;
    let content = null;

    if (this.state.errorMessage) {
      content = <div>{i18n.something_is_wrong}</div>;
    }

    if (!this.state.albums.length) {
      content = <div>++ {i18n.loading} {i18n.album}</div>;
    } else {
      APP.navigate(ROUTE.ASSETS_SCREEN, true);
    }

    return content;

  }
}

export default Album;
