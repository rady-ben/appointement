import axios from "../configApi";

export const signInApi = ({ userName, password }) =>
  axios({
    method: "post",
    url: "/auth/seller/signIn",
    data: { userName, password }
  });

export const signUpApi = ({ userName, password }) =>
  axios({
    method: "post",
    url: "/auth/seller/signUp",
    data: { userName, password }
  });
