import React from 'react'
import ReactDOM from 'react-dom'
import './user-board.sass'

export default class UserBoard extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div id="user-board">
				<div className="user-container">
					<div className="profile">
						<img className="user-img" src="img/user.png"/>
						<span>Paul</span>
					</div>
				</div>
			</div>
		)
	}
}