import React, { Component } from 'react';
import $ from 'jquery';
import '../assets/css/About.css';

class About extends Component {
  componentDidMount() {
    this.adjust();
    window.addEventListener('resize', this.adjust);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjust);
  }

  render() {
    return(
      <div className='About'>
        <div className='contentWrap'>
          <div className='container'>
            <div className='aboutWrapper'>
              <div className='row'>
                <div id="promoVideo" className='col s12 m12 l4 xl4'>
                  <iframe src="https://www.youtube.com/embed/79FrMhHB0Yw" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
                </div>
                <div className='col s12 m12 l8 xl8 aboutTextWrapper'>
                  <h5>What is TechTrix?</h5>
                  <p className=''>
                  TechTrix, the annual Techno-Management Festival of RCC Institute of Information Technology, Kolkata provides an excellent platform to bring together students with the sole goal of revolutionizing the present with ideas of the future.
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col s12 aboutTextWrapper'>
                  <h5>Why come to TechTrix 2018?</h5>
                  <p className=''>It&#8217;s 2018 and Yes! TechTrix is back once more with multitude of exciting events. With around 37 events this year ranging across 6 different categories, TechTrix offers you the opportunity to brag about your technical prowess and perhaps meet some like-minded technocrats, engineers and innovators like yourself.<br />
                  Like every year, TechTrix promises you to bring back old memories and leave you with fresh memories to cherish for a lifetime. Come, witness true exhilaration and feel the adrenaline rush as you battle it out with the brightest minds in fierce competitions. Let&#8217;s make TechTrix 2018 a grand success!
                  </p>
                </div>
              </div>
              <div className='row' style={{marginBottom: 0}}>
                <div className='col s12'>
                  <h5 className='center-align'>OUR STATISTICS FROM TECHTRIX 2017</h5>
                  <div className='col s12 m6 l3 xl3 center-align stats-light'>
                    <h3>35</h3>
                    <h6>EVENTS</h6>
                  </div>
                  <div className='col s12 m6 l3 xl3 center-align stats-dark'>
                    <h3>1100</h3>
                    <h6>PARTICIPANTS</h6>
                  </div>
                  <div className='col s12 m6 l3 xl3 center-align stats-light'>
                    <h3>135</h3>
                    <h6>COLLEGES PARTICIPATED</h6>
                  </div>
                  <div className='col s12 m6 l3 xl3 center-align stats-dark'>
                    <h3><i className='fa fa-rupee'>&nbsp;</i>2,50,000</h3>
                    <h6>WORTH PRIZES</h6>
                  </div>
                </div>
              </div>
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
    $('.aboutWrapper').css('left', margin);
    $('.aboutWrapper').css('right', margin);
  }
}

export default About;
