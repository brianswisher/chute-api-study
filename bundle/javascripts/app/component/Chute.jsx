import Radium from "radium";
import React from "react";
import ChuteRuntime from "./ChuteRuntime";

let styles = {
  list: {
    listStyleType: "none",
    padding: 0
  },
  item: {
    cursor: "pointer"
  }
};

@Radium
class Chute extends ChuteRuntime {
  render() {
    if (this.state.errorMessage) {
      return (
        <div>Something is wrong</div>
      );
    }

    if (!this.state.chutes.length) {
      return (
        <div>loading...</div>
      )
    }

    return (
      <ul style={styles.list}>
        {this.state.chutes.map((chute, i) => {
          return (
            <li style={styles.item} key={i}>
              <a href={chute.href}>{chute.title} ({chute.method})</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Chute;
