import axios from '../configApi';

export const signInApi = ({userName, password}) =>
  axios({
    method: 'post',
    url: '/auth/client/signIn',
    data: {userName, password},
  });

export const signUpApi = ({userName, password}) =>
  axios({
    method: 'post',
    url: '/auth/client/signUp',
    data: {userName, password},
  });
