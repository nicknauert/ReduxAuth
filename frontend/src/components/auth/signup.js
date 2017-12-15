import React, { Component } from 'react';
import reduxForm from 'redux-form';
import { connect } from 'react-redux';


class Signup extends Component {
  render(){
    return (
      <form onSubmit={} >
        <fieldset className="form-group">
          <label>Email</label>
          <input {...email} className="form-control"/>
          <label>Password</label>
          <input {...password} type='password' className="form-control"/>
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    )
  }
}

export default Signup;