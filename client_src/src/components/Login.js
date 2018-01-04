import React from 'react';

const Login = () => (
  <form id="login_form" className='col s10 offset-s1'>
    <div className='row'>
      <div className='input-field col s12'>
        <input id="login_email" type="email" className='validate' required />
        <label htmlFor='login_email'>Email</label>
      </div>
    </div>
    <div className='row'>
      <div className='input-field col s12'>
        <input id="login_password" type="password" className='validate' required />
        <label htmlFor='login_password'>Password</label>
      </div>
    </div>
    <div className='row'>
      <div className='col s12'>
        <div className='btn btn-large waves-effect amber darken-2 black-text'>Log In</div>
      </div>
    </div>
  </form>
);

export default Login;
