import React from "react";

export const id = "B02";

export const description = (
  <div>
    <h1>Creating a title</h1>
    <p>Create a level 2 heading and color it red.</p>
  </div>
);

export const taskList = [
  {
    description: "create H2 heading",
    done: false,
    validation: context => {
      const heading = context.document.querySelector("h2");
      return heading !== null;
    }
  },
  {
    description: "colour it blue",
    done: false,
    validation: context => {
      const heading = context.document.querySelector("h2");
      if (heading !== null) {
        const computedStyles = context.getComputedStyle(heading);
        const color = computedStyles.getPropertyValue("color");
        return color === "rgb(0, 0, blue)";
      }
    }
  }
];
