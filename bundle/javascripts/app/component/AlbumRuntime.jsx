import AlbumStore from "../store/AlbumStore";
import AlbumAction from "../action/AlbumAction";
import React from "react";

class AlbumRuntime extends React.Component {
  constructor(props) {
    super(props);

    this.state = AlbumStore.getState();

    this.onChange = onChange.bind(this);
  }

  componentDidMount() {
    AlbumStore.listen(this.onChange);

    AlbumAction.fetchAlbums();
  }

  componentWillUnmount() {
    AlbumStore.unlisten(this.onChange);
  }
}

function onChange(state) {
  this.setState(state);
}

export default AlbumRuntime;
