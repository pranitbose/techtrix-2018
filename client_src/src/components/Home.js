import React, { Component } from 'react';
import $ from 'jquery';
import '../assets/css/Home.css';
import logoImg from '../assets/images/techtrix_logo.png';

class Home extends Component {
  componentDidMount() {
    let width = window.innerWidth;
    let waitTime = 5000;
    if (width <= 800) {
      waitTime = 1000;
    }
    setTimeout(() => {
      $('.logoWrap').fadeIn(1500);
    }, 500);
    setTimeout(() => {
      $('.eventDate').fadeIn(1500);
    }, waitTime);
  }

  render() {
    return(
      <div className='Home'>
        <div className='eventDate'>
          <span className='amber-glow-text'>23<sup>rd</sup>&nbsp;-&nbsp;25<sup>th</sup>&nbsp;</span>
          <span className='whiteGlow thin'>February,&nbsp;2018</span>
        </div>
        <div className='logoWrap'>
          <img className='logo whiteGlow' src={logoImg} alt='Techtrix 2018 Logo' />
          <div className='logoBlurb'>
            <div className='eventName'>
              <span className='fireGlow'>TECH</span>
              <span className='whiteGlow'>TRIX</span>
            </div>
            <div className='tagline'>
              <span className='whiteGlow thin'>RISING</span>&nbsp;
              <span className='whiteGlow thin'>FROM</span>&nbsp;
              <span className='fireGlow thin'>THE</span>&nbsp;
              <span className='fireGlow thin'>ASHES</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
