import React from 'react'
import ReactDOM from 'react-dom'
import './video-room.sass'
import VideoList from 'components/video-list.jsx'
import {getSearchVideos,sayHello} from 'api/youtube-request.js'

export default class VideoRoom extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			inputText: '',
			searchResults: [],
			videoId: ''
		}
		this.handleInput = this.handleInput.bind(this)
		this.handlekeyPress = this.handlekeyPress.bind(this)
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
		let searchResults = this.state.searchResults
		let searchResultsDOM = ''
		let _this = this
		if(searchResults.length != 0){
			searchResultsDOM = searchResults.map( v => {
				return (
					<div className="search-video" key={v.id.videoId} >
						<img src={v.snippet.thumbnails.default.url} onClick={this.playVideo.bind(this,v.id.videoId)}/>
						<div className="video-detail">
							<div className="channel-name">
								{v.snippet.channelTitle}
							</div>
							<div className="video-title">
								{v.snippet.title}
							</div>
						</div>
					</div>
				)
			})
		}
		return (
			<div className="room-board">
			 	<div className="search-box">
			 		<input className="search-input" placeholder="search videos" 
			 				value={this.state.inputText}
			 				onChange={this.handleInput}
			 				onKeyPress={this.handlekeyPress}/>
			 		{ searchResultsDOM }
			 	</div>
				<div className="container">
					<iframe src={"https://www.youtube.com/embed/"+this.state.videoId+"?autoplay=1"}>
					</iframe>
					<VideoList/>
				</div>
			</div>
		)
	}
	handleInput(e){
		let text = e.target.value
		this.setState({
			inputText: text
		})
		/*
		let _this = this
		getSearchVideos(text).then(videos=>{
				_this.setState({
					searchResults: videos
				})
			})
		*/
	}

	searchVideo(searchText){
		if(searchText){
			let _this = this
			getSearchVideos(searchText).then(videos=>{
				_this.setState({
					searchResults: videos
				})
			})
		}else{
			this.setState({
				searchResults: []
			})
		}
	}

	handlekeyPress(e){
		if(e.key == 'Enter'){
			this.searchVideo(this.state.inputText)
		}
	}

	playVideo(e){
		let vid = e
		this.setState({
			videoId: vid,
			searchResults: []
		})
	}
}