import React, {Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox.js'
//import {robots} from './robots.js'; // because robots.js doesn't use default so we cna export several elements
// in the future this might come from a db
import './App.css';
import Scroll from '../components/Scroll.js'

class App extends Component	{
	constructor () {
			super(); // calls the constructor of component
			this.state = {
				robots: [],
				searchfield: ''
			};
	}

	componentDidMount () {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then(response => response.json()) // the retrun sends the json to the next function as a parameter
				.then(users => this.setState({robots: users})); // updating the state runs render again
	}
	onSearchChange = (event) => {
			this.setState({searchfield: event.target.value});
	}

	render () { // in the App.js robots is part of the state, but it is passed down to other components as props
		const filteredRobots = this.state.robots.filter(robot => {
					return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		if (this.state.robots.length === 0) {
			return <h1 className='f1 tc'>Loading</h1>;
		}
		else {
			return (
				<div className='tc'>
					<h1 className='f1'>Robofriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);
		}
	}
}

export default App