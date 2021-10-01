import React from "react";
import "./InterviewerListItem.scss";
import classNames from "classnames";
export default function InterviewerListItem(props) {
  const listClass = classNames({
    interviewers__item: true,
    "interviewers__item--selected": props.selected,
  });
  return (
    <li className={listClass} onClick={() => props.setInterviewer(props.id)}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.name}
    </li>
  );
}