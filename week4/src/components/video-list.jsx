import React from 'react'
import ReactDOM from 'react-dom'
import './video-list.sass'

export default class VideoList extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className="videos-list">
				<div className="video-block">
					<div className="user-profile">
						<img className="user-picture"/>
					</div>
					<div className="description">
						<div className="user-name">Paul</div>
						<div className="text">
							is playing xxxx...
						</div>
					</div>
				</div>
			</div>
		)
	}
}