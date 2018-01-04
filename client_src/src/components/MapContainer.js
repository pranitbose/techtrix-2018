import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Map from './Map';

const mapStyle = {
  width: '100%',
  height: '400px',
}

export class MapContainer extends Component {
  render() {
    let mapOptions = {
      google: this.props.google,
      zoom: 16,
      center: { lat: 22.559330, lng: 88.396704 },
      gestureHandling: 'cooperative',
      style: mapStyle
    }

    return (
      <Map {...mapOptions} />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAi2DKKQuGx9S3VK0n74wOOJzQ04TF87zo'
})(MapContainer);
