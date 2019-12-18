import axios from "../configApi";

export const getListSlotApi = slotSelector =>
  axios({
    method: "post",
    url: "/appointement/slot/getItems",
    data: slotSelector
  });

export const insertSlotApi = slot =>
  axios({
    method: "put",
    url: "/appointement/slot/insert",
    data: slot
  });

export const validAppointmentApi = appointement =>
  axios({
    method: "put",
    url: "/appointement/appointement/updateItem",
    data: appointement
  });
