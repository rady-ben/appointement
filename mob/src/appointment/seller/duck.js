import {createActions, handleActions} from 'redux-actions';

/**
 * Default state
 */
export const defaultState = {
  listSellers: [],
};

/**
 * Action creators
 */
export const {setListSellers, fetchListSellers} = createActions({
  SET_LIST_SELLERS: ({listSellers}) => ({
    listSellers,
  }),
  FETCH_LIST_SELLERS: undefined,
});

export default handleActions(
  new Map([
    [setListSellers, (state, action) => ({...state, ...action.payload})],
  ]),
  defaultState,
);
