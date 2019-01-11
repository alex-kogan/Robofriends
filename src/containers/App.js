import React, {Component} from 'react'
import {connect} from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox.js'
//import {robots} from './robots.js'; // because robots.js doesn't use default so we cna export several elements
// in the future this might come from a db
import './App.css';
import Scroll from '../components/Scroll.js'

import {setSearchField, requestRobots} from '../actions.js'

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,	// state holds the method searchRobots (as a reducres) which hilds the method searchField once more reducers are added we need to name from which one we need the state
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch (setSearchField(event.target.value)), // send the content of the searc fied to the action
		onRequstRobots: () => dispatch(requestRobots())
	}
}

class App extends Component	{
	componentDidMount () {
		this.props.onRequstRobots();	
	}

	render () { // in the App.js robots is part of the state, but it is passed down to other components as props
		const {searchField, onSearchChange, robots, isPending} = this.props;
		const filteredRobots = robots.filter(robot => {
					return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		if (isPending) {
			return <h1 className='f1 tc'>Loading</h1>;
		}
		else {
			return (
				<div className='tc'>
					<h1 className='f1'>Robofriends</h1>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);