import {createActions, handleActions} from 'redux-actions';

/**
 * Default state
 */
export const defaultState = {
  userName: '',
  password: '',
};

/**
 * Action creators
 */
export const {signIn, signUp, saveProfile} = createActions({
  SIGN_IN: ({userName, password}) => ({
    userName,
    password,
  }),
  SIGN_UP: ({userName, password}) => ({
    userName,
    password,
  }),
  SAVE_PROFILE: ({userName, password}) => ({
    userName,
    password,
  }),
});

export default handleActions(
  new Map([[saveProfile, (state, action) => ({...state, ...action.payload})]]),
  defaultState,
);
