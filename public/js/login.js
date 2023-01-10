/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'logged in successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

// export const login = async (email, password) => {
//   try {
//     // const url = "http://localhost:3000/api/v1/users/login";
//     const url = 'http://127.0.0.1:3000/api/v1/users/login';
//     const res = await fetch(url, {
//       method: 'POST',
//       mode: 'cors',
//       cache: 'no-cache',
//       credentials: 'same-origin',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       redirect: 'follow',
//       referrerPolicy: 'no-referrer',
//       body: JSON.stringify({ email, password }),
//     });

//     if (res.status === 200) {
//       alert('Logged in successfully!');
//       window.setTimeout(() => {
//         location.assign('/');
//       }, 1500);
//     }
//   } catch (err) {
//     alert('error', err);
//   }
// };

export const logout = async () => {
  try {
    const res = await axios({
      meathod: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/users/logout',
    });

    if ((res.data.status = 'success')) location.replace('/');
  } catch (err) {
    showAlert('error', 'Error logging out! Try again');
  }
};
