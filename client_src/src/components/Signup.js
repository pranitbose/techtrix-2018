import React from 'react';
import { Input } from 'react-materialize';

const Signup = () => (
  <form id="signup_form" className='col s10 offset-s1'>
    <div className='row'>
      <div className='input-field col s6'>
        <input id="first_name" type="text" className='validate' required />
        <label htmlFor='first_name'>First Name</label>
      </div>
      <div className='input-field col s6'>
        <input id="last_name" type="text" className='validate' required />
        <label htmlFor='last_name'>Last Name</label>
      </div>
    </div>
    <div className='row'>
      <div className='input-field col s12'>
        <input id="email" type="email" className='validate' required />
        <label htmlFor='email'>Email</label>
      </div>
    </div>
    <div className='row'>
      <div className='input-field col s6'>
        <input id="password" type="password" className='validate' required />
        <label htmlFor='password'>Password</label>
      </div>
      <div className='input-field col s6'>
        <input id="confirm_password" type="password" className='validate' required />
        <label htmlFor='confirm_password'>Confirm Password</label>
      </div>
    </div>
    <div className='row'>
      <div className='col s6'>
        <input className='with-gap' name="gender" type="radio" id="male" required />
        <label htmlFor='male'>Male</label>
      </div>
      <div className='col s6'>
        <input className='with-gap' name="gender" type="radio" id="female" required />
        <label htmlFor='female'>Female</label>
      </div>
    </div>
    <div className='row'>
      <div className='input-field col s12'>
        <input id="college" type="text" className='validate' required />
        <label htmlFor='college'>College</label>
      </div>
    </div>
    <div className='row'>
      <Input s={12} type='select' label="Year" defaultValue="">
        <option value="" disabled>Choose your option</option>
        <option value="ug1">Undergraduate 1st Year</option>
        <option value="ug2">Undergraduate 2nd Year</option>
        <option value="ug3">Undergraduate 3rd Year</option>
        <option value="ug4">Undergraduate 4th Year</option>
        <option value="pg1">Postgraduate 1st Year</option>
        <option value="pg2">Postgraduate 2nd Year</option>
        <option value="pg3">Postgraduate 3rd Year</option>
        <option value="school">School</option>
        <option value="other">Other</option>
      </Input>
    </div>
    <div className='row'>
      <div className='input-field col s6'>
        <input id="contact_number" type="number" className='validate' required />
        <label htmlFor='contact_number'>Contact Number</label>
      </div>
      <div className='input-field col s6'>
        <input id="city" type="text" className='validate' required />
        <label htmlFor='city'>City</label>
      </div>
    </div>
    <div className='row'>
      <div className='col s12'>
        <div className='btn btn-large waves-effect amber darken-2 black-text'>Create An Account</div>
      </div>
    </div>
  </form>
);

export default Signup;
