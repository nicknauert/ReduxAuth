import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  console.log(email, password);
  return function(dispatch){
    // submit email/pass to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then( res => {
        // if req is good
        // - update state ti indicate user is authed
        dispatch({ type: AUTH_USER  }) 
        // - save JWT token
        localStorage.setItem("JWT_TOKEN", res.data.token);
        // - redirect to /feature
        browserHistory.push('/feature')
        
      })
      .catch(() => {
        //if req is bad..
        // - show error to user
        dispatch(authError('Bad Login Info'));
      })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}