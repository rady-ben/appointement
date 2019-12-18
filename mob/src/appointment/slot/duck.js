import {createActions, handleActions} from 'redux-actions';

/**
 * Default state
 */
export const defaultState = {
  listSlot: [],
};

/**
 * Action creators
 */
export const {setListSlot, fetchListSlot} = createActions({
  SET_LIST_SLOT: ({listSlot}) => ({
    listSlot,
  }),
  FETCH_LIST_SLOT: ({userNameSeller, passwordSeller}) => ({
    userNameSeller,
    passwordSeller,
  }),
});

export default handleActions(
  new Map([[setListSlot, (state, action) => ({...state, ...action.payload})]]),
  defaultState,
);
