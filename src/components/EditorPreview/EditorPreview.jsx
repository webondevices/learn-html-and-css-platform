import React from "react";
import "./EditorPreview.scss";

const EditorPreview = ({ className }) => (
  <div className={`Editor__preview ${className}`}>
    <iframe id="previewFrame" />
  </div>
);

export default EditorPreview;
