import React from "react";
import classNames from "classnames";
import "components/Button.scss";
export default function Button(props) {
  const { disabled } = props;
  let buttonClass = classNames({
    button: true,
    "button--confirm": props.confirm,
    "button--danger": props.danger,
  });
  return (
    <button onClick={props.onClick} className={buttonClass} disabled={disabled}>
      {props.children}
    </button>
  );
}
