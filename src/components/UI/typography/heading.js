import * as React from "react";
import headingStyles from "./heading.module.css";

export default function Heading({ children, level }) {
  switch (level) {
    case "two":
      return <h2 className={headingStyles.headingTwo}>{children}</h2>;
    case "three":
      return <h3 className={headingStyles.headingThree}>{children}</h3>;
    case "four":
      return <h4 className={headingStyles.headingFour}>{children}</h4>;
    case "five":
      return <h5 className={headingStyles.headingFive}>{children}</h5>;

    default:
      return <h1 className={headingStyles.headingOne}>{children}</h1>;
  }
}
