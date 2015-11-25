// import Assets from "./component/Assets";
import AlbumStore from "./store/AlbumStore";
import React from "react";

class AlbumScreen extends React.Component {
  render() {
    const { i18n } = this.props;
    let albums = AlbumStore.getState().albums;
    let content = null;

    if (!albums.length) {
      content = <div>{i18n.loading}</div>;
    } else {
      content = <div>{albums.length}</div>;
    }

    return content;
  }
}

export default AlbumScreen;
