import Album from "./component/Album";
import React from "react";

class AlbumScreen extends React.Component {
  render() {
    return <Album {...this.props}/>
  }
}

export default AlbumScreen;
