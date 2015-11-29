import Assets from "./component/Assets";
import React from "react";

class AlbumScreen extends React.Component {
  render() {
    return <Assets {...this.props}/>;
  }
}

export default AlbumScreen;
