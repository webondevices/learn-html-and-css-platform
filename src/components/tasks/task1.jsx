export const description = "Create a level 1 heading and color it red.";
export const test = (markup, style) => {
  const heading = document.querySelector(".Editor__preview h1");

  if (heading !== null) {
    const computedStyles = window.getComputedStyle(heading);
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
