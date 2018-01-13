import React, { Component } from 'react';
import $ from 'jquery';
import TeamMember from './TeamMember';
import MapContainer from './MapContainer';
import '../assets/css/Contact.css';
import team_data from '../assets/data/team_data';

class Contact extends Component {
  componentDidMount() {
    this.setupTabNavigation();
    this.adjust();
    window.addEventListener('resize', this.adjust);
    // Initial Animation On-Mount
    this.cardAnimation();
    // Animation on switching tabs
    $('._tab').on('click', this.cardAnimation);
  }

  componentWillUnmount() {
    $('._tab').off('click', this.cardAnimation);
    window.removeEventListener('resize', this.adjust);
  }

  render() {

    return(
      <div className='Contact'>
        <div className='contentWrap'>
          <div className='contactWrapper'>
            <div className='container'>
              <div className='teamWrapper'>
                <ul className='_tabs'>
                  {team_data.teamDetails.map(({ id, role }) =>
                    <li key={id} className='_tab'>
                      <div id={`linkTeamCat${id}`} onClick={(e) => this.handleTabNavigation(id, e)} className={id === 1 ? 'active' : ''}>{role}</div>
                    </li>
                  )}
                </ul>
                {team_data.teamDetails.map(({ id, members }) =>
                  <div key={id} id={`teamCat${id}`} className={id === 1 ? 'active' : ''}>
                    <TeamMember members={members} />
                  </div>
                )}
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

  setupTabNavigation = () => {
    $('div[id^=teamCat]').hide();
    $('div[id^=teamCat].active').show();
  }

  handleTabNavigation = (id, e) => {
    let $activeTab = $('div[id^=linkTeamCat].active');
    let $activeContent = $('div[id^=teamCat].active');

    let $nextActiveTab = $('#linkTeamCat'+id);
    let $nextActiveContent = $('#teamCat'+id);

    $activeTab.removeClass('active');
    $activeContent.removeClass('active');
    $activeContent.hide();
    $nextActiveTab.addClass('active');
    $nextActiveContent.addClass('active');
    $nextActiveContent.show();
  }

  cardAnimation = () => {
    $('.card').removeClass('tape');
    setTimeout(() => {
      $('.card').addClass('tape');
    }, 2000);
  }
}

export default Contact;
