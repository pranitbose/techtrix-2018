import React, { Component } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import $ from 'jquery';
import '../assets/css/Workshops.css';
import workshops_data from '../assets/data/workshops_data';

class Workshops extends Component {
  componentDidMount() {
    this.setupTabNavigation();
    this.adjust();
    window.addEventListener('resize', this.adjust);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjust);
  }

  render() {
    return(
      <div className='Workshops'>
        <div className='contentWrap'>
          <div className='workshopsWrapper'>
            <div className='container'>
              <div className='workshopsInnerWrap'>
                <ul className='_tabs'>
                  {workshops_data.workshops.map((workshop, i) =>
                    <li key={i} className='_tab'>
                      <div id={`linkWorkshopCat${workshop.id}`} onClick={(e) => this.handleTabNavigation(workshop.id, e)} className={workshop.id === 1 ? 'active' : ''}>{workshop.name}</div>
                    </li>
                  )}
                </ul>
                {workshops_data.workshops.map((workshop, i) =>
                  <div key={i} id={`workshopCat${workshop.id}`} className={workshop.id === 1 ? 'active' : ''}>
                    <Collapsible popout accordion defaultActiveKey={0}>
                      <CollapsibleItem header='Description' icon='info'>
                        <div className="workshopImage">
                         <img id={`workshopImg${i}`} src={workshop.img} alt="Workshop Poster" />
                         <br />
                         <button className="expand btn btn-floating red darken-2 wave-effects" onClick={() => this.handleExpand(i)}>
                           <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                         </button>
                         <a href={workshop.img} target="_blank" rel="noopener noreferrer">
                           <button target="_blank" className="btn btn-floating cyan darken-3 wave-effects">
                             <i className="fa fa-download" aria-hidden="true"></i>
                           </button>
                         </a>
                        </div>
                        <br />
                        {workshop.info}
                        <p><a href={workshop.pdf} className='waves-effect waves-light btn amber darken-2 black-text' target="_blank" rel="noopener noreferrer" style={{fontFamily: 'orbitron'}}>Download pdf</a></p>
                      </CollapsibleItem>
                      <CollapsibleItem header='Venue' icon='place'>
                        <p>{workshop.venue} </p>
                      </CollapsibleItem>
                      <CollapsibleItem header='Date' icon='date_range'>
                        <p>{workshop.date}</p>
                      </CollapsibleItem>
                      <CollapsibleItem header='Registration Fees' icon='attach_money'>
                        <p>&#8377; {workshop.fee} per Participant</p>
                      </CollapsibleItem>
                      <CollapsibleItem header='Coordinators' icon='contacts'>
                        <h5 className="amber-text">Student Coordinators :-</h5>
                        {workshop.contacts.map((c, i) => <p key={i}>{c}</p> )}
                        {/*
                        <h5 className="amber-text">Faculty Coordinators:-</h5>
                        { item.faculty.map((c)=> <p key={c}> {c} </p> ) }
                        */}
                      </CollapsibleItem>
                    </Collapsible>
                  </div>
                )}
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
    $('div[id^=workshopCat]').hide();
    $('div[id^=workshopCat].active').show();
  }

  handleTabNavigation = (id, e) => {
    let $activeTab = $('div[id^=linkWorkshopCat].active');
    let $activeContent = $('div[id^=workshopCat].active');

    let $nextActiveTab = $('#linkWorkshopCat'+id);
    let $nextActiveContent = $('#workshopCat'+id);

    $activeTab.removeClass('active');
    $activeContent.removeClass('active');
    $activeContent.hide();
    $nextActiveTab.addClass('active');
    $nextActiveContent.addClass('active');
    $nextActiveContent.show();
  }

  handleExpand = (id) => {
    let img = $("#workshopImg"+id);
    let parent = img.parent().find('.expand');
    if (img.css('height') === '200px') {
      img.css('height','auto');
      img.css('width','100%');
      parent.html('<i class="fa fa-search-minus" aria-hidden="true"></i>');
    }
    else {
      img.css('height','200px');
      img.css('width','200px');
      parent.html('<i class="fa fa-arrows-alt" aria-hidden="true"></i>');
    }
  }
}

export default Workshops;
