import React from 'react'

export default class Counter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}
	handleIncre = event => {
		this.setState({
			count: this.state.count + 1,
		})
	}
	handleDecre = event => {
		this.setState({
			count: this.state.count - 1,
		})
	}
	render() {
		let { state } = this
		return (
			<div>
				<h1>Count: {state.count}</h1>
				<div>
					<button onClick={this.handleIncre}>+1</button>
					{' '}
					<button onClick={this.handleDecre}>-1</button>
				</div>
			</div>
		)
	}
}