import React from 'react';
import './App.css';
import {RenderAstronauts} from './components/RenderAstronauts/RenderAstronauts'
import { RefreshButton } from './components/RefreshButton/RefreshButton';
import {ISSLocation} from './components/ISSLocation/ISSLocation'

export class App extends React.Component{
  constructor(props){
    super(props)
    this.state = { 
      amount: null,
      astronauts: []
    }
  }
  refreshAstronauts(){
    try {
      fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            amount: responseJson.number,
            astronauts: responseJson.people
          })
        })
    } catch(err) {
      console.log(err);
      console.log('Error in requesting astronauts')
    }
  }
  componentDidMount(){
    
    this.refreshAstronauts();
    
  }
  render(){
    return (<div>
      <div className="canvas">
        <div className='titleContainer'>
          <h1 className='title'>Astronauts tracker</h1>
        </div>
        <div><RenderAstronauts number={this.state.amount} astronauts={this.state.astronauts}/></div>
        {/* <RefreshButton refreshAstronauts={this.refreshAstronauts} /> */}
      </div>
      <h2 className='issTitle'>ISS current location:</h2>
      <ISSLocation />
      </div>)
  }
}

