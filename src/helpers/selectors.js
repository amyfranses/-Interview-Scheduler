export function getAppointmentsForDay(state, day) {
  const dayData = state.days.find((d) => d.name === day);
  if (!dayData) {
    return [];
  }
  return dayData.appointments.map((id) => state.appointments[id]);
}
