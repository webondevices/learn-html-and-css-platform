import React from "react";
import styles from "./Editor.scss";

class Editor extends React.Component {
  constructor() {
    super();
    this.state = {
      style: "",
      markup: ""
    };

    this.populateCss = this.populateCss.bind(this);
    this.populateHtml = this.populateHtml.bind(this);
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
        <div className="Editor__task">Colour the background red</div>
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
