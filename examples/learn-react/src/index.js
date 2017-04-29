import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'

function render() {
	ReactDOM.render(
		<Counter />,
		document.getElementById('root')
	)
}

render()