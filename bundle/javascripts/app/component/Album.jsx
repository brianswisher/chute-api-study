import AlbumRuntime from "./AlbumRuntime";
import Enumerable from "linq";
import React from "react";

const ALBUM_DETAILS = "Album Details";
const CHUTE = "chute";
let {ROUTE} = require("../config/index").CONSTANTS;

class Album extends AlbumRuntime {
  render() {
    const { i18n } = this.props;
    let content = null;

    if (this.state.errorMessage) {
      content = <div>{i18n.something_is_wrong}</div>;
    }

    if (!this.state.albums.length) {
      content = <div>{i18n.loading}</div>;
    } else {
      APP.navigate(ROUTE.ASSETS_SCREEN, true);      
    }

    return content;

  }
}

export default Album;
