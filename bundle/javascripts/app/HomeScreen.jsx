import Chute from "./component/Chute";
import React from "react";

class HomeScreen extends React.Component {
  render() {
    return <Chute {...this.props}/>
  }
}

export default HomeScreen;
