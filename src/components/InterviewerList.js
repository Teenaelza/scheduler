import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
export default function InterviewerList(props) {
  const interviewerArray = props.interviewers.map((interviewer) => (
    <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      setInterviewer={props.setInterviewer}
      selected={props.interviewer === interviewer.id ? true : false}
    />
  ));
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerArray}</ul>
    </section>
  );
}
