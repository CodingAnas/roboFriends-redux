import React, { Component } from 'react'
import Cardlist from '../Components/CardList';
import Searchbox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import Errorboundary from '../Components/Errorboundary'
import './App.css'
import { setSearchfield, setRobots } from '../action';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		searchField : state.searchRobots.searchField,
		robots : state.reqRobots.robots,
		isPending : state.reqRobots.isPending,
		error : state.reqRobots.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearch : event => dispatch(setSearchfield(event.target.value)),
		onRequest : () => dispatch(setRobots())
	}
}


class App extends Component
{
	componentDidMount()
	{
		this.props.onRequest();
	}

	render()
	{
		const{ 
			searchField, 
			robots, 
			isPending,
			onSearch
		} = this.props

		console.log(isPending)

		const filteredbots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})

		return isPending ? 
		<h1 className="tc Head">LOADING!!!</h1> :
		(
			<div className="tc">
				<h1 className="Head">RoboFriends</h1>
				<Searchbox search={onSearch}/>
				<Scroll>
					<Errorboundary>
						<Cardlist robots={filteredbots}/>
					</Errorboundary>
				</Scroll>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);