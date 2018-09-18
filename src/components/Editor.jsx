import React from "react";
import "./Editor.scss";
import ProgressBar from "./ProgressBar/ProgressBar.jsx";
import TaskBox from "./TaskBox/TaskBox.jsx";
import CodeEditor from "./CodeEditor/CodeEditor.jsx";
import EditorPreview from "./EditorPreview/EditorPreview.jsx";
import * as taskList from "./tasks";
class Editor extends React.Component {
  constructor() {
    super();
    const savedMarkup = localStorage.getItem("markup");
    const savedStyle = localStorage.getItem("style");

    this.state = {
      markup: savedMarkup ? savedMarkup : "",
      style: savedStyle ? savedStyle : "",
      validationResult: "",
      valid: false,
      editor: "HTML",
      context: null
    };

    this.styleContainer = null;
    this.bodyContainer = null;

    this.saveEditor = this.saveEditor.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.populateCss = this.populateCss.bind(this);
    this.populateHtml = this.populateHtml.bind(this);
    this.switchEditor = this.switchEditor.bind(this);

    window.onunload = this.saveEditor;
  }

  componentDidMount() {
    const previewIframe = document.getElementById("previewFrame");
    const context = previewIframe.contentWindow;
    const doc = context.document;

    const styleElement = document.createElement("style");
    styleElement.id = "previewStyle";
    doc.head.appendChild(styleElement);
    doc.body.id = "previewBody";

    this.styleContainer = doc.getElementById("previewStyle");
    this.bodyContainer = doc.getElementById("previewBody");

    if (this.state.context === null) {
      this.setState({ context });
    }

    this.populateCss(this.state.style);
    this.populateHtml(this.state.markup);
  }

  saveEditor() {
    localStorage.setItem("style", this.state.style);
    localStorage.setItem("markup", this.state.markup);
  }

  nextStep() {
    this.props.changeProgress(this.props.step + 1);
    this.setState({
      validationResult: "",
      valid: false
    });
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

  switchEditor(editor) {
    this.setState({ editor });
  }

  render() {
    const currentTask = taskList.default[`task${this.props.step}`];

    return (
      <section className="Editor">
        {this.state.context && (
          <TaskBox
            currentTask={currentTask}
            nextStep={this.nextStep}
            context={this.state.context}
          />
        )}
        <CodeEditor
          editor={this.state.editor}
          switchEditor={this.switchEditor}
          markup={this.state.markup}
          style={this.state.style}
          populateHtml={this.populateHtml}
          populateCss={this.populateCss}
        />
        <EditorPreview />
        <ProgressBar currentStep={this.props.step} totalSteps="100" />
      </section>
    );
  }
}

export default Editor;
