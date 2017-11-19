import React from 'react'
import ReactDOM from 'react-dom'
import './video-list.sass'

export default class VideoList extends React.Component {
	constructor(props){
		super(props)
		this.playVideo = this.playVideo.bind(this)
	}
	componentDidMount(){
		/*
		getSearchVideos('howhow').then(videos=>{
				console.log(videos)
			})
		*/
	}
	render(){
		//let videos = this.props.playList
		let videos = new Array()
		videos = this.props.playList
		//console.log(this.props.playList)
		let playListVideoDom = ''
		let activeVideo = this.props.activeVideo

		if(videos.lenght != 0){
			let index = -1
			playListVideoDom = videos.map(v => {
				index++
				return (
					<div className={ (activeVideo == index)?"video-block playing":"video-block"} key={v.vid+'playlist'} onClick={this.playVideo.bind(this,v.vid,index)}>
						<img className="video-img" src={v.imgUrl}/>
						<div className="video-detail">
							<div className="channel-name">
								{v.channel}
							</div>
							<div className="video-title">
								{v.title}
							</div>
						</div>
					</div>
				)
			})
		}

		return(
			<div className="videos-list">
				{playListVideoDom}
			</div>
		)
	}
	playVideo(vid,index){
		this.props.currentIndex(vid,index)
	}
}