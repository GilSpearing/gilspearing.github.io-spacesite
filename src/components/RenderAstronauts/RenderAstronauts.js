import React from 'react';
import {AstronautsContainer} from '../AstronautsContainer/AstronautsContainer';
import './RenderAstronauts.css'


export class RenderAstronauts extends React.Component {
	iterateAstronauts(){
		return this.props.astronauts.map(item => {
			return (<AstronautsContainer name={item.name} craft={item.craft} key={item.name} />)
		})
	}
	render(){
		return(
			<div className='contentContainer'>
				<div className='numberContainer'>
					<h3 className='numberOfAstroHeader'>Currently in space:</h3>
					<p className='numberOfAstro'>{this.props.number}</p>
				</div>
				<div className='astroContContainer'>
					<h3 className='numberOfAstroHeader'>Astronauts:</h3>
					<div className='astroContCont'>{this.iterateAstronauts()}</div>
				</div>
			</div>
			)
	}
}