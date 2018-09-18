import React from "react";

export const id = "B01";

export const description = (
  <div>
    <h1>Creating a title</h1>
    <p>Create a level 1 heading and color it red.</p>
  </div>
);

export const taskList = [
  {
    description: "create H1 heading",
    done: false,
    validation: context => {
      const heading = context.document.querySelector("h1");
      return heading !== null;
    }
  },
  {
    description: "colour it red",
    done: false,
    validation: context => {
      const heading = context.document.querySelector("h1");
      if (heading !== null) {
        const computedStyles = context.getComputedStyle(heading);
        const color = computedStyles.getPropertyValue("color");
        return color === "rgb(255, 0, 0)";
      } else {
        return false;
      }
    }
  }
];
