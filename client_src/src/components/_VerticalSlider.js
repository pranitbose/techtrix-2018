import React, { Component } from 'react';
import $ from 'jquery';
import '../assets/css/VerticalSlider.css';

class VerticalSlider extends Component {
  componentDidMount() {
    this.initVerticalSlider();
    this.content.on('scroll touchmove mousewheel', this.handleScroll);
    $(window).resize(() => {
      let slideHeight = this.content[0].clientHeight;
      this.content.scrollTop(0);
      this.content.scrollTop(slideHeight * (this.sectionIndex - 1));
      this.section.css('height', (100/this.numOfSections)+'%');
    });
  }

  initVerticalSlider() {
    this.content = $('.contentWrap');
    this.section = $('.section');
    this.fullpage = this.content.find('.fullpage');
    this.sectionIndex = 1;
    this.animationSpeed = 2000;
    this.curScroll = 0;
    this.nextScroll = 0;
    this.scrolled = false;
    this.numOfSections = this.fullpage[0].childElementCount;
    this.section.css('height', (100/this.numOfSections)+'%');
  }

  handleScroll = (e) => {
    if (!this.scrolled) {
      this.scrolled = true;
      this.content.addClass('stop-scrolling');
      //console.log(this.content.scrollTop());
      //console.log(this.curScroll);
      //console.log('Not Scrolling');
      this.nextScroll = this.content.scrollTop();
      if (this.nextScroll > this.curScroll) {
        this.down(e);
      }
      else if (this.nextScroll < this.curScroll) {
        this.up(e);
      }
      else {
        this.scrolled = false;
        this.content.removeClass('stop-scrolling');
      }
    }
  }

  up = (e) => {
    if (this.sectionIndex > 1) {
      let slideHeight = this.content[0].clientHeight;
      let adjustSlideHeight = this.nextScroll - ((this.sectionIndex - 2) * slideHeight);
      this.content.animate({scrollTop: '-='+adjustSlideHeight}, this.animationSpeed, () => {
        this.sectionIndex--;
      });
      setTimeout(() => {
        this.curScroll = (this.sectionIndex - 2) * slideHeight;
        //this.curScroll = this.content.scrollTop();
        this.scrolled = false;
        this.content.removeClass('stop-scrolling');
      }, this.animationSpeed);
    }
  }

  down = (e) => {
    if (this.sectionIndex < this.numOfSections) {
      let slideHeight = this.content[0].clientHeight;
      let adjustSlideHeight = (this.sectionIndex * slideHeight) - this.nextScroll;
      this.content.animate({scrollTop: '+='+adjustSlideHeight}, this.animationSpeed, () => {
        this.sectionIndex++;
      });
      setTimeout(() => {
        this.curScroll = this.sectionIndex * slideHeight;
        //this.curScroll = this.content.scrollTop();
        this.scrolled = false;
        this.content.removeClass('stop-scrolling');
      }, this.animationSpeed);
    }
  }

  render() {
    return(
      <div className='VerticalSlider'>
        <div className='fullpage'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default VerticalSlider;
