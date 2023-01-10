/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts.js';

export const signup = async (name, email, password, passwordConfirm) => {
  console.log(name, email, password, passwordConfirm);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Signed up successfully');
      window.setImmediate(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
