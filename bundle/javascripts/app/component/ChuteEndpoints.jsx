import React from "react";

class ChuteEndpoints extends React.Component {
  render() {
    return (
      <ul>
        {this.props.chutes.map((chute, i) => {
          return (
            <li key={i}>
              <a href={chute.href}>{chute.title} ({chute.method})</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ChuteEndpoints;
