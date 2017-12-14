import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch){
    // submit email/pass to server
    axios.post(`${ROOT_URL}/signin`, { email, password });
    // if req is good
    // - update state ti indicate user is authed
    // - save JWT token
    // - redirect to /feature
    
    //if req is bad..
    // - show error to user
    

  }
}