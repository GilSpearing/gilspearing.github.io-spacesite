import './ISSLocation.css';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.tsx';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class ISSLocation extends Component {
  constructor(props){
    super(props);
    this.state = {
      issLat: 10,
      issLng: 10
    }
  }
  getISSLocation(){
    try {
      fetch('http://api.open-notify.org/iss-now.json')
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            issLat: responseJson.iss_position.latitude,
            issLng: responseJson.iss_position.longitude
          })
        })
    } catch(err) {
      console.log(err);
      console.log('Error in requesting astronauts')
    }
  }
  componentDidMount(){
    this.intervalId = setInterval(() => this.getISSLocation(), 1000)
    this.getISSLocation();
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  static defaultProps = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 1
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%'}} className='Maps'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDq5PGmYXK0m-r22VlaevmzSDvrC3BDXzw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

          <Marker
            lat={this.state.issLat}
            lng={this.state.issLng}
            name="My Marker"
            color="rgba(255, 87, 51, 1)"
          />

        </GoogleMapReact>
        
      </div>
    );
  }
}


// <AnyReactComponent
//   lat={this.state.issLat}
//   lng={this.state.issLng}
//   text="ISS location"
//   // map='map'
//   // icon='ISS.png'
// />