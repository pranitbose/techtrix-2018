import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, NavItem } from 'react-materialize';
import $ from 'jquery';
import Slider from './Slider';
import '../assets/css/EventList.css';
import eventdetails_data from '../assets/data/eventdetails_data';

let eventCat = ['robotics', 'coding', 'gaming', 'geeks', 'kaleidoscope', 'out of the box'];

class EventList extends Component {
  componentDidMount() {
    this.dropdownMenu = [];
    this.resolveBackLink(this.props.lastLocName);
    this.createDropdownMenu();
  }

  render() {
    return(
      <div className='section'>
        <Slider id={this.props.id} slideIndex={this.getSlideIndex(this.props.lastLocName, this.props.id)}>
          <div id={`slider${this.props.id}`}>
            <div className='slides center'>
              <div className='middle-indicator'>
                <div className='left'>
                  <span id='prevSlide' className='waves-effect waves-light content-indicator'><i className='medium material-icons middle-indicator-text'>chevron_left</i></span>
                </div>
                <div className='right'>
                  <span id='nextSlide' className='waves-effect waves-light content-indicator'><i className='medium material-icons middle-indicator-text'>chevron_right</i></span>
                </div>
              </div>
              {this.props.eventCategory.map((_event) =>
                <div key={_event.id} className='slide white-text'>
                  <div className='slide-content'>
                    <Dropdown trigger={
                        <div className='event-category'><a className='btn amber-glow-text'>{this.props.categoryName}<i className='material-icons right'>arrow_drop_down</i></a></div>
                      }>
                      {this.createDropdownMenu().map((category, i) =>
                        <NavItem key={i} href={`#${category.replace(/\s+/g, '_')}`}>{category}</NavItem>
                      )}
                    </Dropdown>

                    <img src={require(`../assets/images/event_logo/${this.props.categoryName.replace(/\s+/g, '-')}/${_event.icon}.png`)} className='event-icon' alt="Event Icon" />
                    <div className='eventBtn'>
                      <Link to={`/events/${_event.name.replace(/\s+|'|-|\./g, '_').toLowerCase()}`}  className='btn btn-large waves-effect black-text event-link'>{_event.name}</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Slider>
      </div>
    );
  }

  resolveBackLink = (prevRouteName) => {
    let prevPathnames = prevRouteName.replace(/\//, '').split('/');
    let len = prevPathnames.length;
    if (len === 2) {
      let eventName = prevPathnames[1];
      let _event = eventdetails_data[eventName];
      if (_event) {
        let width = window.innerWidth;
        let newMargin = -1 * width * (_event.slideIndex - 1);
        let $slider = $('#slider' + _event.categoryNum);
        let $slidesContainer = $slider.find('.slides');
        $slidesContainer.css('margin-left', newMargin);
      }
    }
  }

  getSlideIndex = (prevRouteName, sliderId) => {
    let prevPathnames = prevRouteName.replace(/\//, '').split('/');
    let len = prevPathnames.length;
    if (len === 2) {
      let eventName = prevPathnames[1];
      let _event = eventdetails_data[eventName];
      if (_event && _event.categoryNum === parseInt(sliderId, 10)) {
        return _event.slideIndex;
      }
    }
    return 1;
  }

  createDropdownMenu = () => {
    let menu = eventCat.filter( e => e !== this.props.categoryName )
    //console.log(this.dropdownMenu);
    return menu;
  }
}

export default EventList;
