import React from 'react'
import ReactDOM from 'react-dom'
import './main.sass'
import ChatBoard from 'components/chat-board.jsx'


export default class Main extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div id="main-bg">
				<ChatBoard/>
			</div>
		)
	}

}