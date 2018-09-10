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

    this.iframeContext = null;
    this.styleContainer = null;
    this.bodyContainer = null;

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

  validate() {
    let testResult = task1.test(this.iframeContext);

    if (testResult === true) {
      this.setState({ validationResult: "Congratulations!!!" });
    } else {
      this.setState({ validationResult: testResult });
    }
  }

  populateCss(event) {
    const newStyle = event.target.value;
    this.styleContainer.innerHTML = newStyle;
  }

  populateHtml(event) {
    const newMarkup = event.target.value;
    this.bodyContainer.innerHTML = newMarkup;
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
        <div className="Editor__preview">
          <iframe id="previewFrame" />
        </div>
      </section>
    );
  }
}

export default Editor;
