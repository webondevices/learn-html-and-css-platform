import React from "react";
import styles from "./App.scss";
import Welcome from "./Welcome.jsx";
import Editor from "./Editor.jsx";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as progressActions from "../actions/progressActions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.actions.getProgress();
  }

  render() {
    return (
      <div>
        {this.props.step === 0 && (
          <Welcome
            step={this.props.step}
            changeProgress={this.props.actions.changeProgress}
          />
        )}
        {this.props.step > 0 && (
          <Editor
            step={this.props.step}
            changeProgress={this.props.actions.changeProgress}
          />
        )}
      </div>
    );
  }
}

function mapsStateToProps(state, ownProps) {
  return {
    step: state.progress.step
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(progressActions, dispatch)
  };
}

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(App);
