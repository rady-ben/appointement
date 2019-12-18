import {createActions, handleActions} from 'redux-actions';

/**
 * Default state
 */
export const defaultState = {
  listAppointments: [],
};

/**
 * Action creators
 */
export const {
  setListAppointments,
  fetchListAppointments,
  requestAppointment,
  addAppointment,
} = createActions({
  SET_LIST_APPOINTMENTS: ({listAppointments}) => ({
    listAppointments,
  }),
  REQUEST_APPOINTMENT: ({userNameSeller, passwordSeller, time, date}) => ({
    userNameSeller,
    passwordSeller,
    time,
    date,
  }),
  ADD_APPOINTMENT: ({
    userNameSeller,
    passwordSeller,
    time,
    date,
    userNameClient,
    passwordClient,
    state,
  }) => ({
    userNameSeller,
    passwordSeller,
    time,
    date,
    userNameClient,
    passwordClient,
    state,
  }),
  FETCH_LIST_APPOINTMENTS: undefined,
});

export default handleActions(
  new Map([
    [setListAppointments, (state, action) => ({...state, ...action.payload})],
    [
      addAppointment,
      (state, action) => ({
        ...state,
        listAppointments: [...state.listAppointments, action.payload],
      }),
    ],
  ]),
  defaultState,
);
