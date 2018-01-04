import React, { Component } from 'react';
import $ from 'jquery';
import TeamMember from './TeamMember';
import Slider from './Slider';
import MapContainer from './MapContainer';
import '../assets/css/Contact.css';
import team_data from '../assets/data/team_data';

class Contact extends Component {
  componentDidMount() {
    this.adjust();
    window.addEventListener('resize', this.adjust);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjust);
  }

  render() {
    return(
      <div className='Contact'>
        <div className='contentWrap'>
          <div className='contactWrapper'>
          <div className='section'>
            <Slider id="7">
              <div id="slider7">
                <div className='slides center'>
                  <div className='middle-indicator'>
                    <div className='left'>
                      <span id='prevSlide' className='waves-effect waves-light content-indicator'><i className='medium material-icons middle-indicator-text'>chevron_left</i></span>
                    </div>
                    <div className='right'>
                      <span id='nextSlide' className='waves-effect waves-light content-indicator'><i className='medium material-icons middle-indicator-text'>chevron_right</i></span>
                    </div>
                  </div>
                  {team_data.teamDetails.map((teamCategory) =>
                    <div key={teamCategory.id} className='slide white-text'>
                      <div className='container'>
                        <div className='slide-content'>
                          <h3 className='amber-glow-text'>{teamCategory.role}</h3>
                          <TeamMember members={teamCategory.members} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Slider>
          </div>
          <div className='mapWrapper'>
            <MapContainer />
            <h5 className='center-align'>
              <a href="mailto:rcciit.techtrix@gmail.com">
                <i className='material-icons'>email</i>&nbsp;Click to Email us
              </a>
            </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }

  adjust = () => {
    let width = window.innerWidth;
    if (width <= 800) {
      $('.contentWrap').css('top', '48px');
      $('.contentWrap').css('height', '100%').css('height', '-=48px');
    }
    else {
      $('.contentWrap').css('top', '64px');
      $('.contentWrap').css('height', '100%').css('height', '-=64px');
    }
  }
}

export default Contact;
