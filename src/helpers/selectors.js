export function getAppointmentsForDay(state, day) {
  const appointmentArray = state.days
    .filter((dayelem) => dayelem.name === day)
    .map((dayObj) => dayObj.appointments);
  if (appointmentArray.length > 0) {
    return appointmentArray[0].map((element) => state.appointments[element]);
  }
  return [];
}

export function getInterview(state, interview) {
  if (interview !== null) {
    return {
      interviewer: { ...state.interviewers[interview.interviewer] },
      student: interview.student,
    };
  }
  return null;
}
export function getInterviewersForDay(state, day) {
  const interviewArray = state.days
    .filter((dayelem) => dayelem.name === day)
    .map((dayObj) => dayObj.interviewers);
  if (interviewArray.length > 0) {
    return interviewArray[0].map((element) => state.interviewers[element]);
  }
  return [];
}
