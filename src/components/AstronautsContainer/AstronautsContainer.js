import React from 'react';
import './AstronautsContainer.css';

export class AstronautsContainer extends React.Component{
	render(){
		return (<div className='astroContainer'>
				<p className='astroName'>{this.props.name}</p>
				<div className='descriptionContainer'>
					<p className='astroShip'>Onboard the: {this.props.craft}</p>
				</div>
			</div>)
	}
}