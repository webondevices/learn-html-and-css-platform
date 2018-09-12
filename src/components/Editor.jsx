import React from "react";
import styles from "./Editor.scss";
import * as taskList from "./tasks";
class Editor extends React.Component {
  constructor() {
    super();
    this.state = {
      markup: "",
      style: "",
      validationResult: "",
      valid: false
    };

    this.iframeContext = null;
    this.styleContainer = null;
    this.bodyContainer = null;

    this.nextStep = this.nextStep.bind(this);
    this.populateCss = this.populateCss.bind(this);
    this.populateHtml = this.populateHtml.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    const previewIframe = document.getElementById("previewFrame");
    this.iframeContext = previewIframe.contentWindow;
    const doc = this.iframeContext.document;

    const styleElement = document.createElement("style");
    styleElement.id = "previewStyle";
    doc.head.appendChild(styleElement);
    doc.body.id = "previewBody";

    this.styleContainer = doc.getElementById("previewStyle");
    this.bodyContainer = doc.getElementById("previewBody");
  }

  nextStep() {
    this.props.changeProgress(this.props.step + 1);
    this.setState({
      validationResult: "",
      valid: false
    });
    this.populateCss("");
    this.populateHtml("");
  }

  validate() {
    const currentTask = taskList.default[`task${this.props.step}`];
    let testResult = currentTask.test(this.iframeContext);

    if (testResult === true) {
      this.setState({
        validationResult: "Congratulations!!!",
        valid: true
      });
    } else {
      this.setState({
        validationResult: testResult,
        valid: false
      });
    }
  }

  populateCss(input) {
    this.styleContainer.innerHTML = input;
    this.setState({
      style: input
    });
  }

  populateHtml(input) {
    this.bodyContainer.innerHTML = input;
    this.setState({
      markup: input
    });
  }

  render() {
    const currentTask = taskList.default[`task${this.props.step}`];

    return (
      <section className="Editor">
        <div className="Editor__progress">{this.props.step} / 100</div>
        <div className="Editor__task">
          <span>{currentTask.description}</span>
          <br />
          <button type="button" onClick={this.validate}>
            Check
          </button>
          <br />
          <span>{this.state.validationResult}</span>
          {this.state.valid && (
            <button type="button" onClick={this.nextStep}>
              Next
            </button>
          )}
        </div>
        <div className="Editor__editor-html">
          <textarea
            onInput={e => {
              this.populateHtml(e.target.value);
            }}
            value={this.state.markup}
          />
        </div>
        <div className="Editor__editor-css">
          <textarea
            onInput={e => {
              this.populateCss(e.target.value);
            }}
            value={this.state.style}
          />
          <style>{this.state.style}</style>
        </div>
        <div className="Editor__preview">
          <iframe id="previewFrame" />
        </div>
      </section>
    );
  }
}

export default Editor;
