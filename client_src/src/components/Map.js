import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Map extends Component {
  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  render() {
    return(
      <div ref="map" id="map" style={this.props.style}>
        loading map...
      </div>
    );
  }

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const mountNode = ReactDOM.findDOMNode(mapRef);

      const mapOptions = {
        zoom: this.props.zoom,
        center: this.props.center,
        gestureHandling: this.props.gestureHandling
      }
      this.map = new maps.Map(mountNode, mapOptions);

      const markerOptions = {
        position: this.props.center,
        map: this.map,
        title: 'RCC Institute of Information Technology, Kolkata'
      }
      new maps.Marker(markerOptions);
    }
  }
}

export default Map;
