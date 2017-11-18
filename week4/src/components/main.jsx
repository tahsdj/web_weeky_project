import React from 'react'
import ReactDOM from 'react-dom'
import './main.sass'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import VideoRoom from './video-room.jsx'

export default class Main extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return(	
			<Router>
				<div id="main-screen">
					<Route exact path="/" render={()=><VideoRoom/>}/>
				</div>
			</Router>
		)
	}
}