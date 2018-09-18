import React from "react";
import "./CodeEditor.scss";

const CodeEditor = ({
  editor,
  switchEditor,
  markup,
  style,
  populateHtml,
  populateCss,
  className
}) => (
  <div className={`Editor__codeEditor ${className}`}>
    <button
      className={`Editor__languageSelector ${editor === "HTML" && "active"}`}
      onClick={() => switchEditor("HTML")}
    >
      HTML
    </button>
    <button
      className={`Editor__languageSelector ${editor === "CSS" && "active"}`}
      onClick={() => switchEditor("CSS")}
    >
      CSS
    </button>
    {editor === "HTML" && (
      <div className="Editor__editor-html">
        <textarea onChange={e => populateHtml(e.target.value)} value={markup} />
      </div>
    )}
    {editor === "CSS" && (
      <div className="Editor__editor-css">
        <textarea onChange={e => populateCss(e.target.value)} value={style} />
      </div>
    )}
  </div>
);

export default CodeEditor;
