import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from'jquery';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import '../assets/css/EventDetails.css';
import eventdetails_data from '../assets/data/eventdetails_data';

class EventDetails extends Component {
  componentDidMount() {
    let _event = eventdetails_data[this.props.match.params.eventName];
    this.isValidEvent = _event ? true : false;
    if (!this.isValidEvent) {
      this.props.history.push('/not-found');
    }
    else {
      this.adjust();
      window.addEventListener('resize', this.adjust);
    }
  }

  componentWillUnmount() {
    if (this.isValidEvent) {
      window.removeEventListener('resize', this.adjust);
    }
  }

  render() {
    let _event = eventdetails_data[this.props.match.params.eventName];

    if (!_event) {
      return(null);
    }
    return(
      <div className='EventDetails'>
        <div className='contentWrap'>
          <Link to={{
            pathname: '/events',
            hash: _event.eventCategory
          }} className='backBtn'><i className='material-icons small left'>chevron_left</i>BACK</Link>
          <div className='container'>
            <div className='eventDetailsWrap black-text'>
              <h2 className='amber-glow-text'>{_event.eventName}</h2>
              <Collapsible accordion popout defaultActiveKey={0}>
                <CollapsibleItem header='Event Description' icon='info'>
                  <p className='center-align'><strong>{_event.tagline}</strong></p>
                  <p>{_event.eventDescription}</p>
                </CollapsibleItem>
                <CollapsibleItem header='General Rules' icon='description'>
                  <ul>
                    {_event.generalRules.split('\n').map((rule, i) =>
                      <li key={i}>{rule}</li>
                    )}
                  </ul>
                  {_event.rulesPdf !== '' &&
                    <p>For detailed Rules, refer to the downloadable rule-book below.</p>
                  }
                  {_event.rulesPdf !== '' &&
                    <a href={_event.rulesPdf} className='waves-effect waves-light btn'>Download Rules</a>
                  }
                </CollapsibleItem>
                <CollapsibleItem header='Registration Details' icon='person_add'>
                  <p><strong>Event Registration Fees:</strong>&nbsp;{_event.registrationDetails}</p>
                  <p><strong>General Registration Fees:</strong>&nbsp;₹20 (One-Time Payment only)</p>
                </CollapsibleItem>
                <CollapsibleItem header='Prize Details' icon='attach_money'>
                  <p>{_event.prizeDetails}</p>
                </CollapsibleItem>
                <CollapsibleItem header='Venue & Timings' icon='location_on'>
                  <p>Will be updated soon</p>
                </CollapsibleItem>
                <CollapsibleItem header='Contacts' icon='contacts'>
                  {_event.contacts.map((person, i) =>
                    <p key={i}>{person.name}:&nbsp;<a href={`tel:${person.mobile}`} className='black-text'>{person.mobile}</a></p>
                  )}
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
