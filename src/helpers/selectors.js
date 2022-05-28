function getAppointmentsForDay(state, day) {
  const dayData = state.days.find((d) => d.name === day);
  if (!dayData) {
    return [];
  }
  return dayData.appointments.map((id) => state.appointments[id]);
}

function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const interviewer = state.interviewers[interview.interviewer];
  return { ...interview, interviewer };
}

export { getAppointmentsForDay, getInterview };
