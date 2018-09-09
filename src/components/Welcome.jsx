import React from "react";
import styles from "./Welcome.scss";

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Welcome to the page</h1>
        <button
          onClick={() => {
            this.props.changeProgress(1);
          }}
          type="button"
        >
          Click to get started
        </button>
      </div>
    );
  }
}

export default Welcome;
