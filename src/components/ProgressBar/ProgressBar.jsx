import React from "react";
import "./ProgressBar.scss";
import wizardIcon from "./wizardIcon.js";

const ProgressBar = ({ currentStep, totalSteps }) => (
  <div className="Editor__progress">
    <img className="wizard-icon" src={wizardIcon} />
    <div className="navigation-section">
      <button className="previous-button">&lt;</button>
      <span>
        {currentStep} / {totalSteps}
      </span>
      <button className="next-button">&gt;</button>
    </div>
    <button className="home-button">Home</button>
  </div>
);

export default ProgressBar;
