import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import $ from 'jquery';
import Home from './Home';
import Events from './Events';
import Register from './Register';
import Workshops from './Workshops';
import Hospitality from './Hospitality';
import Sponsors from './Sponsors';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import EventDetails from './EventDetails';
import NotFound from './NotFound';
import Fade from './Fade';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastLocationPathname: ''
    };
  }

  componentDidMount() {
    $('body').css('pointer-events', 'none');
    let width = window.innerWidth;
    let waitTime = 7000;
    if (width <= 800) {
      waitTime = 3000;
    }
    setTimeout(() => {
      $('body').css('pointer-events', 'auto');
    }, waitTime);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location) {
      this.setState({lastLocationPathname: this.props.location.pathname});
    }
  }

  render() {
    return(
      <main>
        <Fade location={this.props.location}>
          <Switch location={this.props.location}>
            <Route exact path='/' component={Home} />
            <Route exact path='/events' render={ ({ location }) => <div><div className='bgOverlay'></div><Events location={location} lastLocName={this.state.lastLocationPathname} /></div> } />
            <Route exact path='/signup' render={ ({ location }) => <div><div className='bgOverlay'></div><Register location={location} lastLocName={this.state.lastLocationPathname} /></div> } />
            <Route exact path='/login' render={ ({ location }) => <div><div className='bgOverlay'></div><Register location={location} lastLocName={this.state.lastLocationPathname} /></div> } />
            <Route exact path='/workshops' render={ () => <div><div className='bgOverlay'></div><Workshops /></div> } />
            <Route exact path='/hospitality' render={ () => <div><div className='bgOverlay'></div><Hospitality /></div> } />
            <Route exact path='/sponsors' render={ () => <div><div className='bgOverlay'></div><Sponsors /></div> } />
            <Route exact path='/gallery' render={ () => <div><div className='bgOverlay'></div><Gallery /></div>  } />
            <Route exact path='/about' render={ () => <div><div className='bgOverlay'></div><About /></div> } />
            <Route exact path='/contact' render={ () => <div><div className='bgOverlay'></div><Contact /></div> } />
            <Route exact path='/events/:eventName' render={ ({ match, history }) => <div><div className='bgOverlay'></div><EventDetails match={match} history={history} /></div> } />
            <Route component={NotFound} />
          </Switch>
        </Fade>
      </main>
    );
  }
}

export default Main;
