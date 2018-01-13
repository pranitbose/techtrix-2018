import React, { Component } from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import '../assets/css/Navbar.css';

class Navbar extends Component {
  componentDidMount() {
    let width = window.innerWidth;
    let waitTime = 4500;
    if (width <= 800) {
      waitTime = 1000;
    }
    setTimeout(() => {
      $('#nav-large-screen').fadeIn(1500);
      $('.nav-mobile').fadeIn(1500);
      $('.horizontal-grad').fadeIn(1500);
    }, waitTime);
  }

  render() {
    return(
      <div className='Navbar'>
        <nav id='nav-large-screen' className='hide-on-med-and-down'>
          <div className='navIndicatorWrapper'>
            <span className='leftDoubleChevron left'>
              <i className='material-icons left'>chevron_left</i>
              <i className='material-icons left left-chevron-double'>chevron_left</i>
              </span>
            <span className='rightDoubleChevron right'>
              <i className='material-icons right right-chevron-double'>chevron_right</i>
              <i className='material-icons right'>chevron_right</i>
            </span>
          </div>
          <div className='nav-wrapper'>
            <ul>
              <li><NavLink exact to="/" activeClassName="linkActive">HOME</NavLink></li>
              <li><NavLink exact to="/events#robotics" activeClassName="linkActive">EVENTS</NavLink></li>
              <li><NavLink exact to="/signup" activeClassName="linkActive">SIGN&nbsp;UP</NavLink></li>
              <li><NavLink exact to="/login" activeClassName="linkActive">LOG&nbsp;IN</NavLink></li>
              <li><NavLink exact to="/workshops" activeClassName="linkActive">WORKSHOPS</NavLink></li>
              {/*<li><NavLink exact to="/hospitality" activeClassName="linkActive">HOSPITALITY</NavLink></li>*/}
              <li><NavLink exact to="/sponsors" activeClassName="linkActive">SPONSORS</NavLink></li>
              {/*<li><NavLink exact to="/gallery" activeClassName="linkActive">GALLERY</NavLink></li>*/}
              <li><NavLink exact to="/about" activeClassName="linkActive">ABOUT&nbsp;US</NavLink></li>
              <li><NavLink exact to="/contact" activeClassName="linkActive">CONTACT&nbsp;US</NavLink></li>
            </ul>
          </div>
        </nav>
        <div className='nav-mobile hide-on-large-only'>
          <NavLink exact to="/" activeClassName="linkActive">HOME</NavLink>
          <NavLink exact to="/events#robotics" activeClassName="linkActive">EVENTS</NavLink>
          <NavLink exact to="/signup" activeClassName="linkActive">SIGN&nbsp;UP</NavLink>
          <NavLink exact to="/login" activeClassName="linkActive">LOG&nbsp;IN</NavLink>
          <NavLink exact to="/workshops" activeClassName="linkActive">WORKSHOPS</NavLink>
          {/*<NavLink exact to="/hospitality" activeClassName="linkActive">HOSPITALITY</NavLink>*/}
          <NavLink exact to="/sponsors" activeClassName="linkActive">SPONSORS</NavLink>
          {/*<NavLink exact to="/gallery" activeClassName="linkActive">GALLERY</NavLink>*/}
          <NavLink exact to="/about" activeClassName="linkActive">ABOUT&nbsp;US</NavLink>
          <NavLink exact to="/contact" activeClassName="linkActive">CONTACT&nbsp;US</NavLink>
        </div>
        <div className='horizontal-grad'></div>
      </div>
    );
  }
}

export default Navbar;
