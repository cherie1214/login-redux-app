import { AUTH_LOGIN, AUTH_LOGOUT } from './ActionTypes';
// import axios from 'axios';

/* LOGIN */
// export function loginRequest(username, password) {
//   return (dispatch) => {
//       // Inform Login API is starting
//       dispatch(login());

//       // API REQUEST
//       return axios.post('/api/account/signin', { username, password })
//       .then((response) => {
//           // SUCCEED
//           dispatch(loginSuccess(username));
//       }).catch((error) => {
//           // FAILED
//           dispatch(loginFailure());
//       });
//   };
// }

export function requestLogin() {
  return {
      type: AUTH_LOGIN
  };
}

export function requestLogout() {
  return {
      type: AUTH_LOGOUT
  };
}
