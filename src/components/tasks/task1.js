export const description = "Create a level 1 heading and color it red.";
export const test = context => {
  const heading = context.document.querySelector("h1");

  if (heading !== null) {
    const computedStyles = context.getComputedStyle(heading);
    const color = computedStyles.getPropertyValue("color");

    if (color === "rgb(255, 0, 0)") {
      return true;
    } else {
      return "Heading found, but the color is " + color;
    }
  } else {
    return "No heading found.";
  }
};
