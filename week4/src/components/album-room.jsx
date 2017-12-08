import React from 'react'
import ReactDOM from 'react-dom'
import './album-room.sass'

export default class AlbumRoom extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let videoList = []
		for( let i = 0 ; i < 5 ; i++ ){
			let tmp = (
						<div className={ i==0?"album-video first": "album-video"}>
							<div className="img-container">
								<img src={`img/album/video-list/${i}.jpg`}/>
							</div>
						</div>	
					)
			videoList = [...videoList,tmp]
		}
		return (
			<div className="album-room">
				<div className="banner">
					<img src="img/album/0.jpg"/>
				</div>
				<div className="album-room-container">
					{videoList}
				</div>
				<div className="player-container">
					<span className="channel-name">channel</span>
					<span className="video-name">video name</span>
					<audio controls></audio>
				</div>	
			</div>
		)
	}
}