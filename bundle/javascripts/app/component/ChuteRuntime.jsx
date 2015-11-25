import React from "react";
import ChuteStore from "../store/ChuteStore";
import ChuteAction from "../action/ChuteAction";

class ChuteRuntime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chutes: ChuteStore.getState().chutes
    };

    this.onChange = onChange.bind(this);
  }

  componentDidMount() {
    ChuteStore.listen(this.onChange);

    ChuteAction.fetchChutes();
  }

  componentWillUnmount() {
    ChuteStore.unlisten(this.onChange);
  }
}

function onChange(state) {
  this.setState(state);
}

export default ChuteRuntime;
