import { useState, useEffect } from "react";
import axios from "axios";
import { getAppointmentsForDay } from "../helpers/selectors";

export default function useApplicationData(initial) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  function updateSpots(state) {
    const updatedDays = [];
    for (const dayObject of state.days) {
      const appointments = getAppointmentsForDay(state, dayObject.name);
      const openAppointments = appointments.filter(
        (appointment) => appointment.interview === null
      );
      const openSpots = openAppointments.length;
      updatedDays.push({ ...dayObject, spots: openSpots });
    }
    return updatedDays;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      const newState = { ...state, appointments };
      const updatedDays = updateSpots(newState);
      setState({ ...newState, days: updatedDays });
    });
  }

  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`, { interview }).then(() => {
      const newState = { ...state, appointments };
      const updatedDays = updateSpots(newState);
      setState({ ...newState, days: updatedDays });
    });
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);
  return { state, setDay, bookInterview, cancelInterview };
}
