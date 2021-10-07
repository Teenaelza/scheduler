import { useState, useEffect } from "react";
import axios from "axios";
export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],

    appointments: {},
    interviewers: {},
  });
  const setDay = (day) => setState((prev) => ({ ...prev, day }));

  //FUNCTION CALLED AFTER BOOK AND CANCEL INTERVIEW
  function updateSpots(newstate) {
    const dayIndex = newstate.days.findIndex(
      (dayelem) => dayelem.name === newstate.day
    );

    const spots = newstate.days[dayIndex].appointments.filter(
      (ele) => newstate.appointments[ele].interview === null
    ).length;
    const day = { ...newstate.days[dayIndex], spots };
    const days = [...newstate.days];
    days[dayIndex] = day;
    return { ...newstate, days };
  }

  //FUNCTION
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
          const newState = {
            ...state,
            appointments,
          };
          const updateSpot = updateSpots(newState);
          setState(updateSpot);
        }
      });
  }
  //FUNCTION
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
        const newState = {
          ...state,
          appointments,
        };
        const updateSpot = updateSpots(newState);
        setState(updateSpot);
      }
    });
  }
  useEffect(() => {
    const URL1 = "/api/days";
    const URL2 = "/api/appointments";
    const URL3 = "/api/interviewers";
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
  return { state, setDay, bookInterview, cancelInterview };
}
