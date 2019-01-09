import React, {Component} from 'react';
import './Hello.css';
// {component} is destructuring allowing us to use Component instead of React.component

class Hello extends Component {
	render() {
		return (
			<div  className='f1 tc'>
				<h1>Hello World!!</h1>
				<p className='bg-navy light-blue fl w-50'>{this.props.greeting}</p>
				<p className='light-blue fl w-50'>Hi {this.props.user}, what's up?</p>
			</div>
		);
	}
}

export default Hello;
