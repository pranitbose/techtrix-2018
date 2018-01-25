import React, { Component } from 'react';
import { Modal } from 'react-materialize';
import $ from 'jquery';
import '../assets/css/Sponsors.css';

class Sponsors extends Component {
  componentDidMount() {
    this.adjust();
    window.addEventListener('resize', this.adjust);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjust);
  }

  render() {
    let sponsors = [ [1, 2, 3], [4, 5, 6], [7] ];

    return(
      <div className='Sponsors'>
        <div className='contentWrap'>
          <div className='container'>
            <div className='sponsorsWrap'>
              <Modal
                header='Sponsor Us Form'
                trigger={<button className='waves-effect waves-light btn amber darken-2 black-text' style={{fontFamily: 'orbitron-med'}}>Sponsor Us</button>}>
                <iframe title="Sponsor Us Form" src="https://docs.google.com/forms/d/e/1FAIpQLScn85xF9YQaSWxQSqE2wZOlAOV6bcPBNGPI6gVQ0ti_q979WA/viewform?embedded=true" width="100%" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
              </Modal>
              <h2 className='amber-glow-text'>Our Previous Year Sponsors</h2>
              {sponsors.map((i) =>
                <div key={i[0]} className='row'>
                  {i.map((j) =>
                    <div key={j} className='col s8 m10 l4 xl4 offset-s2 offset-m1'>
                      <img className='responsive-img' src={require(`../assets/images/sponsors/${j}.png`)} alt="" />
                    </div>
                  )}
                </div>
              )}
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
      $('.sponsorsWrap').css('top', '68px');
    }
    else {
      $('.contentWrap').css('top', '64px');
      $('.contentWrap').css('height', '100%').css('height', '-=64px');
      $('.sponsorsWrap').css('top', '84px');
    }
  }
}

export default Sponsors;
