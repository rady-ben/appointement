import axios from '../configApi';

export const getListApi = () =>
  axios({
    method: 'get',
    url: '/appointement/appointement/getSellersList',
  });

export const getListAppointmentApi = appointementSelector =>
  axios({
    method: 'post',
    url: '/appointement/appointement/getItems',
    data: appointementSelector,
  });

export const getListSlotApi = slotSelector =>
  axios({
    method: 'post',
    url: '/appointement/slot/getItems',
    data: slotSelector,
  });

export const requestAppointmentApi = appointment =>
  axios({
    method: 'put',
    url: '/appointement/appointement/insert',
    data: appointment,
  });
