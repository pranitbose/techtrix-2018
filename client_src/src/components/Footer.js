import React, { Component } from 'react';
import $ from 'jquery';
import '../assets/css/Footer.css';

class Footer extends Component {
  componentDidMount() {
    let width = window.innerWidth;
    let waitTime = 4500;
    if (width <= 800) {
      waitTime = 1000;
    }
    setTimeout(() => {
      $('.Footer').fadeIn(1500);
    }, waitTime);
    $('.fixed-action-btn-left').on('click', this.animateNotificationBox);
  }

  render() {
    return(
      <div className='Footer'>
        <div className='fixed-action-btn click-to-toggle spin-close'>
          <a className='btn-floating btn-large lime accent-4'><i className='material-icons'>link</i></a>
          <ul>
            <li><a href="https://www.facebook.com/techtrix.rcciit" className='btn-floating grey lighten-1' rel="noopener noreferrer" target="_blank"><i className='fa fa-facebook black-text'></i></a></li>
            <li><a href="https://www.instagram.com/techtrixrcciit" className='btn-floating grey lighten-1' rel="noopener noreferrer" target="_blank"><i className='fa fa-instagram black-text'></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCZCiBjecFOBEyGTjHXUJcWw" className='btn-floating grey lighten-1' rel="noopener noreferrer" target="_blank"><i className='fa fa-youtube black-text'></i></a></li>
            <li><a href="https://www.twitter.com/TechTrixRCCIIT" className='btn-floating grey lighten-1' rel="noopener noreferrer" target="_blank"><i className='fa fa-twitter black-text'></i></a></li>
          </ul>
        </div>
        <div className='fixed-action-btn-left fixed-action-btn click-to-toggle _spin-close pulse'>
          <a className='btn-floating btn-large deep-orange accent-3'><i className='material-icons'>notifications</i></a>
          <ul className='notificationBox'>
            <li>Techtrix 2018 Website has been officially launched!</li>
            <li>Workshop Posters and Details are now available as downloadable content.</li>
            <li>Event Rules are not finalised and are subject to changes.</li>
          </ul>
        </div>
      </div>
    );
  }

  animateNotificationBox = (e) => {
    $('.fixed-action-btn-left').off('click', this.animateNotificationBox);
    $('.notificationBox li').css('margin-left', '-300px');
    let numNotifications = $('.notificationBox li').length;
    for (let i=1; i<=numNotifications; i++) {
      setTimeout(() => {
        let notification = $('.notificationBox li:nth-child('+i+')');
        notification.animate({'margin-left': '+=300px'}, 300);
      }, i*300);
    }
    setTimeout(() => {
      $('.fixed-action-btn-left').on('click', this.animateNotificationBox);
    }, (numNotifications + 1) * 300);
  }
}

export default Footer;
