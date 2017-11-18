import React, { Component } from 'react';
import $ from 'jquery';
import { NavLink, Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

class Navbar extends Component {
  componentDidMount() {
    setTimeout(() => {
      $('#nav-large-screen').fadeIn(6000);
    }, 10000);
  }

  render() {
    return(
      <div className='Navbar'>
        <nav id='nav-large-screen' className='hide-on-med-and-down'>
          <div className='nav-wrapper'>
            <ul>
              <li className='popOut'><NavLink exact to="/" activeClassName="link-active">HOME</NavLink></li>
              <li className='popOut'><NavLink exact to="/events" activeClassName="link-active">EVENTS</NavLink></li>
              <li className='popOut'><NavLink exact to="/signup" activeClassName="link-active">SIGN UP</NavLink></li>
              <li className='popOut'><NavLink exact to="/gallery" activeClassName="link-active">GALLERY</NavLink></li>
              <li><Link to="/" className="brand-logo">Logo</Link></li>
              <li className='popOut'><NavLink exact to="/sponsors" activeClassName="link-active">SPONSORS</NavLink></li>
              <li className='popOut'><NavLink exact to="/about" activeClassName="link-active">ABOUT US</NavLink></li>
              <li className='popOut'><NavLink exact to="/contact" activeClassName="link-active">CONTACT US</NavLink></li>
            </ul>
          </div>
        </nav>
        <div className='nav-mobile hide-on-large-only'>
          <NavLink exact to="/" activeClassName="link-active">HOME</NavLink>
          <NavLink exact to="/events" activeClassName="link-active">EVENTS</NavLink>
          <NavLink exact to="/signup" activeClassName="link-active">SIGN UP</NavLink>
          <NavLink exact to="/gallery" activeClassName="link-active">GALLERY</NavLink>
          <NavLink exact to="/sponsors" activeClassName="link-active">SPONSORS</NavLink>
          <NavLink exact to="/about" activeClassName="link-active">ABOUT US</NavLink>
          <NavLink exact to="/contact" activeClassName="link-active">CONTACT US</NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
