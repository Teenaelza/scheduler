import React, { useState, useEffect } from "react";
import axios from "axios";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "components/Appointment/index";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "helpers/selectors";
export default function Application(props) {
  const [state, setState] = useState({
    day: "",
    days: [],

    appointments: {},
    interviewers: {},
  });
  //populate appointement array with the appointment details for the day selected
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  console.log("state", state);
  //get all the interviewers available in the day and their details in an array
  const interviewers = getInterviewersForDay(state, state.day);
  const setDay = (day) => setState((prev) => ({ ...prev, day }));
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios
      .put(`/api/appointments/${id}`, { interview: { ...interview } })
      .then((response) => {
        if (response.status === 204) {
          return setState((prev) => ({
            ...prev,
            appointments,
          }));
        }
      });
  }
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.delete(`/api/appointments/${id}`).then((response) => {
      if (response.status === 204) {
        return setState((prev) => ({
          ...prev,
          appointments,
        }));
      }
    });
  }
  //create an appointment component  for each appointment
  const appointmentArray = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    return (
      <Appointment
        key={appointment.id}
        {...appointment}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });
  const URL1 = "/api/days";
  const URL2 = "/api/appointments";
  const URL3 = "/api/interviewers";
  useEffect(() => {
    Promise.all([axios.get(URL1), axios.get(URL2), axios.get(URL3)]).then(
      (all) => {
        const [first, second, third] = all;
        const days = first.data;
        const appointments = second.data;
        const interviewers = third.data;
        setState((prev) => ({ ...prev, days, appointments, interviewers }));
      }
    );
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />{" "}
      </section>
      <section className="schedule">
        {appointmentArray}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
