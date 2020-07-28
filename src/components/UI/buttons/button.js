import * as React from "react";
import buttonStyles from "./buttons.module.css";

export default function Button({
  children,
  name,
  type,
  value,
  disabled,
  autoFocus,
}) {
  return (
    <button
      className={buttonStyles.button}
      name={name}
      type={type}
      value={value}
      disabled={disabled}
      autoFocus={autoFocus}
    >
      {children}
    </button>
  );
}

/**
 * name
 * type
 * value
 * disabled
 * auto-focus
 */
