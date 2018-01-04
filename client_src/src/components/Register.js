import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Signup from './Signup';
import Login from './Login';
import '../assets/css/Register.css'

class Register extends Component {
  componentDidMount() {
    this.resolvePath(this.props.lastLocName, this.props.location.pathname);
    this.adjust();
    window.addEventListener('resize', this.adjust);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjust);
  }

  render() {
    return(
      <div className='Register'>
        <div className='contentWrap'>
          <div className="container">
            <div className='formWrap'>
              <div className='row'>
                <div className='col s10 offset-s1'>
                  <h5 className='grey-text light'>NOTE: Registration is not yet open!</h5>
                  <ul className='_tabs'>
                    <li className='_tab col s6'><Link to='/signup' id="signupLink">Sign Up</Link></li>
                    <li className='_tab col s6'><Link to='/login' id="loginLink">Log In</Link></li>
                  </ul>
                </div>
                <Signup />
                <Login />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  adjust = () => {
    let width = window.innerWidth;
    let contentWidth = $('.container')[0].clientWidth;
    let margin = (width - contentWidth) / 2;
    if (width <= 800) {
      $('.contentWrap').css('top', '48px');
      $('.contentWrap').css('height', '100%').css('height', '-=48px');
    }
    else {
      $('.contentWrap').css('top', '64px');
      $('.contentWrap').css('height', '100%').css('height', '-=64px');
    }
    $('.formWrap').css('left', margin);
    $('.formWrap').css('right', margin);
  }

  resolvePath = (prevRouteName, curRouteName) => {
    prevRouteName = prevRouteName.replace(/\//, '');
    curRouteName = curRouteName.replace(/\//, '');
    if (prevRouteName === 'signup' || prevRouteName === 'login') {
      if (curRouteName === 'signup') {
        $('#loginLink').removeClass('active');
        $('#login_form').hide();
        $('#signupLink').addClass('active');
      }
      else if (curRouteName === 'login') {
        $('#signupLink').removeClass('active');
        $('#signup_form').hide();
        $('#loginLink').addClass('active');
      }
    }
    else {
      if (curRouteName === 'signup') {
        $('#login_form').hide();
        $('#signupLink').addClass('active');
      }
      else if (curRouteName === 'login') {
        $('#signup_form').hide();
        $('#loginLink').addClass('active');
      }
    }
  }
}

export default Register;
