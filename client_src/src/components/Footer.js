import React, { Component } from 'react';
import $ from 'jquery';
import '../assets/css/Footer.css';

class Footer extends Component {
  componentDidMount() {
    setTimeout(() => {
      $('.Footer').fadeIn(3000);
    }, 5000);
  }

  render() {
    return(
      <div className='Footer'>
        <div className='fixed-action-btn click-to-toggle spin-close'>
          <a className='btn-floating btn-large lime accent-4'><i className='material-icons'>link</i></a>
          <ul>
            <li><a href="https://www.facebook.com/techtrix.rcciit" className='btn-floating grey lighten-1'><i className='fa fa-facebook black-text'></i></a></li>
            <li><a href="https://www.instagram.com/techtrixrcciit" className='btn-floating grey lighten-1'><i className='fa fa-instagram black-text'></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCZCiBjecFOBEyGTjHXUJcWw" className='btn-floating grey lighten-1'><i className='fa fa-youtube black-text'></i></a></li>
            <li><a href="https://www.twitter.com/TechTrixRCCIIT" className='btn-floating grey lighten-1'><i className='fa fa-twitter black-text'></i></a></li>
          </ul>
        </div>
        <div className='fixed-action-btn-left'>
          <a className='btn-floating btn-large deep-orange accent-3'><i className='material-icons'>notifications</i></a>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
