import React, { Component } from 'react';
import $ from 'jquery';
import EventList from './EventList';
import EventIcon from './EventIcon';
import SectionsContainer from './SectionsContainer';
import Section from './Section';
import '../assets/css/Events.css';
import events_data from '../assets/data/events_data';

class Events extends Component {
  componentDidMount() {
    this.adjust();
    window.addEventListener('resize', this.adjust);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjust);
  }

  render() {
    let options = {
      anchors:              ['robotics', 'coding', 'gaming', 'geeks', 'kaleidoscope', 'out_of_the_box'],
      delay:                700, // the scroll animation speed
      touchSensitivity:     3,
      navigation:           false
    };

    return(
      <div className='Events'>
        <div ref='contentWrap' className='contentWrap fullpage'>
          <EventIcon />
          <SectionsContainer {...options}>
            <Section><EventList id="1" eventCategory={events_data.robotics} categoryName='robotics' lastLocName={this.props.lastLocName} /></Section>
            <Section><EventList id="2" eventCategory={events_data.coding} categoryName='coding' lastLocName={this.props.lastLocName} /></Section>
            <Section><EventList id="3" eventCategory={events_data.gaming} categoryName='gaming' lastLocName={this.props.lastLocName} /></Section>
            <Section><EventList id="4" eventCategory={events_data.geeks} categoryName='geeks' lastLocName={this.props.lastLocName} /></Section>
            <Section><EventList id="5" eventCategory={events_data.kaleidoscope} categoryName='kaleidoscope' lastLocName={this.props.lastLocName} /></Section>
            <Section><EventList id="6" eventCategory={events_data.outOfTheBox} categoryName='out of the box' lastLocName={this.props.lastLocName} /></Section>
          </SectionsContainer>
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

export default Events;
