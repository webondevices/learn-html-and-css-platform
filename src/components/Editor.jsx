import React from "react";
import styles from "./Editor.scss";
import * as task1 from "./tasks/task1.jsx";
class Editor extends React.Component {
  constructor() {
    super();
    this.state = {
      style: "",
      markup: "",
      validationResult: ""
    };

    this.populateCss = this.populateCss.bind(this);
    this.populateHtml = this.populateHtml.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    let message = this.state.validationResult;
    let testResult = task1.test();

    if (testResult === true) {
      this.setState({ validationResult: "Congratulations!!!" });
    } else {
      this.setState({ validationResult: testResult });
    }
  }

  populateCss(event) {
    const newStyle = event.target.value;
    this.setState({ style: newStyle });
  }

  populateHtml(event) {
    const newMarkup = event.target.value;
    this.setState({ markup: newMarkup });
  }

  render() {
    return (
      <section className="Editor">
        <div className="Editor__progress">{this.props.step} / 100</div>
        <div className="Editor__task">
          <span>{task1.description}</span>
          <br />
          <button type="button" onClick={this.validate}>
            Check
          </button>
          <br />
          <span>{this.state.validationResult}</span>
        </div>
        <div className="Editor__editor-html">
          <textarea onInput={this.populateHtml} />
        </div>
        <div className="Editor__editor-css">
          <textarea onInput={this.populateCss} />
          <style>{this.state.style}</style>
        </div>
        <div
          className="Editor__preview"
          dangerouslySetInnerHTML={{ __html: this.state.markup }}
        />
      </section>
    );
  }
}

export default Editor;
