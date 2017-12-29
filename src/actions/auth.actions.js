/* eslint-disable import/prefer-default-export */

export const NEW_USER = 'NEW_USER';
export const EMAIL_AUTH = 'EMAIL_AUTH';
export const INCORRECT_PASSWORD = 'INCORRECT_PASSWORD';
export const EMAIL_EXISTS = 'EMAIL_EXISTS';

const BASE_URL = '';

/**
 * posts to our API with an email and password
 * get back a JWT and a user, save to localStorage
 * dispatch the user
 * @param {Object} credentials - user login credentials
 */

export function newUser(credentials) {
  const loginSuccess = true;
  console.log(credentials);
  return (dispatch) => {
    // post to API with credentials
    // fetch(`${BASE_URL}/auth/new-user`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: credentials.username,
    //     email: credentials.email,
    //     password: credentials.password,
    //     passwordConfirm: credentials.passwordConfirm,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then((user) => {
    if (loginSuccess) {
      const tempUser = {
        username: 'Test User',
      };

      // dispatch the user
      dispatch({
        type: NEW_USER,
        payload: tempUser,
      });
    } else {
      const testError = {
        email: 'Email already exists, do you need to Login?',
      };

      // dispatch error
      dispatch({
        type: EMAIL_EXISTS,
        payload: testError,
      });
    }
    //     });
    //   })
    //   .catch(error => console.log('ERROR', error));
  };
}

export function emailAuth(credentials) {
  const loginSuccess = true;
  console.log(credentials);
  return (dispatch) => {
    // post to API with credentials
    // fetch(`${BASE_URL}/auth/login`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: credentials.email,
    //     password: credentials.password,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then((user) => {
    if (loginSuccess) {
      const tempUser = {
        username: 'Test User',
      };

      // dispatch the user
      dispatch({
        type: EMAIL_AUTH,
        payload: tempUser,
      });
    } else {
      const testError = {
        email: 'Email does not exist, do you need to create an account?',
        password: 'Did you forget your password?',
      };

      // dispatch error
      dispatch({
        type: INCORRECT_PASSWORD,
        payload: testError,
      });
    }

    // })
    // .catch(error => console.log('ERROR', error));
  };
}
