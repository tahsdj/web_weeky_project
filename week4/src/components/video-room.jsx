import React from 'react'
import ReactDOM from 'react-dom'
import './video-room.sass'
import VideoList from 'components/video-list.jsx'
import {getSearchVideos,sayHello} from 'api/youtube-request.js'
import Youtube from 'react-youtube'

export default class VideoRoom extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			inputText: '',
			searchResults: [],
			videoId: '',
			myPlayList: [],
			player: '',
			currentVideoIndex: 0
		}
		this.handleInput = this.handleInput.bind(this)
		this.handlekeyPress = this.handlekeyPress.bind(this)
		this.playVideo = this.playVideo.bind(this)
		this.cancelSearching = this.cancelSearching.bind(this)
		this.playOtherVideos = this.playOtherVideos.bind(this)
		this.handlePlayList = this.handlePlayList.bind(this)
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
						<img src={v.snippet.thumbnails.default.url} onClick={this.playVideo.bind(this,v)}/>
						<div className="video-detail">
							<div className="channel-name">
								{v.snippet.channelTitle}
							</div>
							<div className="video-title">
								{v.snippet.title}
							</div>
							<img src="img/add.png" className="add" onClick={this.addToPlayList.bind(this,v)}/>
						</div>
					</div>
				)
			})
		}
		//style for video frame
		const opts = {
	      height: '450',
	      width: '100%',
	      playerVars: { // https://developers.google.com/youtube/player_parameters
	        autoplay: 1
	      }
	    };
	    let currentIndex = this.state.currentVideoIndex
		return (
			<div className="room-board">
			 	<div className="search-box" onMouseLeave={this.cancelSearching}>
			 		<input className="search-input" placeholder="search videos" 
			 				value={this.state.inputText}
			 				onChange={this.handleInput}
			 				onKeyPress={this.handlekeyPress}/>
			 		{ searchResultsDOM }
			 	</div>
				<div className="container">
					<div id="player">
						<Youtube  videoId={this.state.videoId} opts={opts} onEnd={this.playOtherVideos}/>
					</div>
					<VideoList playList={this.state.myPlayList} 
								currentIndex={this.handlePlayList} 
								activeVideo={currentIndex}/>
				</div>
			</div>
		)
	}

	onPlayerReady(event){
		//console.log(event)
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

	playVideo(v){
		//src={"https://www.youtube.com/embed/"+this.state.videoId+"?autoplay=1&enablejsapi=1"} onStateChange={this.videoSate}
		let video = {
			channel: v.snippet.channelTitle,
			title: v.snippet.title,
			imgUrl: v.snippet.thumbnails.default.url,
			vid: v.id.videoId
		}
		let playList = this.state.myPlayList
		let index = this.state.currentVideoIndex
		if(playList.length != 0 ) index++
		playList.splice(index,0,video)
		this.setState({
			videoId: video.vid,
			searchResults: [],
			myPlayList: playList,
			currentVideoIndex: index
		})
	}
	cancelSearching(){
		this.setState({
			searchResults: []
		})
	}
	addToPlayList(v){
		let video = {
			channel: v.snippet.channelTitle,
			title: v.snippet.title,
			imgUrl: v.snippet.thumbnails.default.url,
			vid: v.id.videoId
		}
		let myPlayList = new Array()
		myPlayList = this.state.myPlayList
		myPlayList.push(video)
		this.setState({
			myPlayList: myPlayList
		})
	}
	playOtherVideos(){
		if(this.state.myPlayList != []) {
			let index = this.state.currentVideoIndex
			index++
			if(index < this.state.myPlayList.length){
				let vid = this.state.myPlayList[index].vid
				this.setState({
					videoId: vid,
					currentVideoIndex: index
				})
			}
			//if( index < this.state.myPlayList.length - 1 ){
			//}
		}
	}
	handlePlayList(vid,index){
		this.setState({
				videoId: vid,
				currentVideoIndex: index
			})
	}
}