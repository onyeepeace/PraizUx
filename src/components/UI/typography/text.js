import * as React from "react";
import textStyles from "./text.module.css";

export default function Text({ children }) {
  return <p className={textStyles.text}>{children}</p>;
}
