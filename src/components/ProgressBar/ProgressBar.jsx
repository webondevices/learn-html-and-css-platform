import React from "react";
import "./ProgressBar.scss";

const ProgressBar = ({ currentStep, totalSteps }) => (
  <div className="Editor__progress">
    {currentStep} / {totalSteps}
  </div>
);

export default ProgressBar;
