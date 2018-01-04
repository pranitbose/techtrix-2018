import React, { Component } from 'react';
import $ from'jquery';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import '../assets/css/EventDetails.css';
import eventdetails_data from '../assets/data/eventdetails_data';

class EventDetails extends Component {
  componentDidMount() {
    console.log(this.props.match.params.eventName);
    this.adjust();
    window.addEventListener('resize', this.adjust);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjust);
  }

  render() {
    return(
      <div className='EventDetails'>
        <div className='contentWrap'>
          <div className='container'>
            <div className='eventDetailsWrap black-text'>
              <h2 className='amber-glow-text'>Event Name</h2>
              <Collapsible accordion popout defaultActiveKey={0}>
                <CollapsibleItem header='Event Description' icon='info'>
                  <p>Will be updated soon</p>
                </CollapsibleItem>
                <CollapsibleItem header='General Rules' icon='description'>
                  <p>Will be updated soon</p>
                </CollapsibleItem>
                <CollapsibleItem header='Registration Details' icon='person_add'>
                  <p>Will be updated soon</p>
                </CollapsibleItem>
                <CollapsibleItem header='Prize Details' icon='attach_money'>
                  <p>Will be updated soon</p>
                </CollapsibleItem>
                <CollapsibleItem header='Venue & Timings' icon='location_on'>
                  <p>Will be updated soon</p>
                </CollapsibleItem>
                <CollapsibleItem header='Contacts' icon='contacts'>
                  <p>Will be updated soon</p>
                </CollapsibleItem>
              </Collapsible>
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
    $('.eventDetailsWrap').css('left', margin);
    $('.eventDetailsWrap').css('right', margin-1);
  }
}

export default EventDetails;
