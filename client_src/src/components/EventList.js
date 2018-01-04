import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider';
import '../assets/css/EventList.css';

const EventList = (props) => (
  <div className='section'>
    <Slider id={props.id}>
      <div id={`slider${props.id}`}>
        <div className='slides center'>
          <div className='middle-indicator'>
            <div className='left'>
              <span id='prevSlide' className='waves-effect waves-light content-indicator'><i className='medium material-icons middle-indicator-text'>chevron_left</i></span>
            </div>
            <div className='right'>
              <span id='nextSlide' className='waves-effect waves-light content-indicator'><i className='medium material-icons middle-indicator-text'>chevron_right</i></span>
            </div>
          </div>
          {props.eventCategory.map((_event) =>
            <div key={_event.id} className='slide white-text'>
              <div className='slide-content'>
                <h2 className='amber-glow-text'>{props.categoryName}</h2>
                <i className="material-icons event-icon">{_event.icon}</i>
                <div className='eventBtn'>
                  <Link to={`/events/${_event.name.replace(/\s+/g, '-').replace(/'|\./g, '_').toLowerCase()}`}  className='btn btn-large waves-effect black-text event-link'>{_event.name}</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Slider>
  </div>
);

export default EventList;
