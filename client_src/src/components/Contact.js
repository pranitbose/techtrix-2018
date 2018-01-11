import React, { Component } from 'react';
import { Tabs, Tab } from 'react-materialize';
import $ from 'jquery';
import TeamMember from './TeamMember';
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
            <div className='container'>
              <div className='teamWrapper'>
                <Tabs className='_tabs' defaultValue="Executive Heads">
                  {team_data.teamDetails.map((teamCategory) =>
                    <Tab key={teamCategory.id} title={teamCategory.role} className='_tab'>
                      <TeamMember members={teamCategory.members} />
                    </Tab>
                  )}
                </Tabs>
              </div>
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
