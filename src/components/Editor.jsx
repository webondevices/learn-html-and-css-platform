import React from "react";
import styles from "./Editor.scss";

class Editor extends React.Component {
  constructor() {
    super();
    this.state = {
      style: ""
    };

    this.populateStyle = this.populateStyle.bind(this);
  }

  populateStyle(event) {
    const newStyle = event.target.value;
    this.setState({ style: newStyle });
  }

  render() {
    return (
      <section className="Editor">
        <div className="Editor__progress">{this.props.step} / 100</div>
        <div className="Editor__task">Colour the background red</div>
        <div className="Editor__editor">
          <textarea onInput={this.populateStyle} />
          <style>{`.Editor__preview { ${this.state.style} }`}</style>
        </div>
        <div className="Editor__preview" />
      </section>
    );
  }
}

export default Editor;
