import "components/DayListItem.scss";
import React from "react";
import classNames from "classnames";
export default function DayListItem(props) {
  let spot =
    props.spots > 1
      ? `${props.spots} spots`
      : props.spots === 1
      ? `1 spot`
      : "no spots";
  let dayClass = classNames({
    "day-list__item": true,
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });
  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{spot} remaining</h3>
    </li>
  );
}
