import React from 'react'
import ReactDOM from 'react-dom'
import './video-room.sass'
import uuid from 'uuid/v4'
import VideoList from 'components/video-list.jsx'
import {getSearchVideos,sayHello} from 'api/youtube-request.js'
import Youtube from 'react-youtube'
import {listShareVideos,shareVideoToOthers,onShareVideos} from 'api/share-video.js'

export default class VideoRoom extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			inputText: '',
			searchResults: [],
			videoId: '',
			myPlayList: [],
			player: '',
			currentVideoIndex: 0,
			playListVideosLimit: 6,
			mySharedVideoUuid: '',
			lifeTime: 100
		}
		this.handleInput = this.handleInput.bind(this)
		this.handlekeyPress = this.handlekeyPress.bind(this)
		this.playVideo = this.playVideo.bind(this)
		this.cancelSearching = this.cancelSearching.bind(this)
		this.playOtherVideos = this.playOtherVideos.bind(this)
		this.handlePlayList = this.handlePlayList.bind(this)
		this.shareVideo = this.shareVideo.bind(this)
		this.handleComment = this.handleComment.bind(this)
		this.addSharedVideo = this.addSharedVideo.bind(this)
	}
	componentDidMount(){
		/*
		getSearchVideos('howhow').then(videos=>{
				console.log(videos)
			})
		*/
		this.onDatabase = onShareVideos(this.addSharedVideo) 
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
	      height: '100%',
	      width: '100%',
	      playerVars: { // https://developers.google.com/youtube/player_parameters
	        autoplay: 1
	      }
	    };
	    let currentIndex = this.state.currentVideoIndex
		return (
			<div className="room-board">
				<header>
				 	<div className="search-box" onMouseLeave={this.cancelSearching}>
				 		<input className="search-input" placeholder="search videos" 
				 				value={this.state.inputText}
				 				onChange={this.handleInput}
				 				onKeyPress={this.handlekeyPress}/>
				 		<div className="search-video-container">
				 			{ searchResultsDOM }
				 		</div>
				 	</div>
				 	<div id="profile">
				 		<img src="./img/profile.png"/>
	
				 	</div>
			 	</header>
				<div className="container">
					<div id="player">
						<Youtube  videoId={this.state.videoId} opts={opts} onEnd={this.playOtherVideos}/>
					</div>
					<VideoList playList={this.state.myPlayList} 
								currentIndex={this.handlePlayList} 
								activeVideo={currentIndex}
								shareVideo={this.shareVideo}
								handleComment={this.handleComment}/>
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

	addSharedVideo(v){
		let playList = this.state.myPlayList
		//console.log('v: ', v.uuid)
		//console.log('current',this.state.mySharedVideoUuid)
		if(v.uuid != this.state.mySharedVideoUuid){
			let d = new Date()
			let time = Math.floor((d.getTime()/1000))
			//console.log(time)
			let timeGap = Math.floor(((time-v.time) / 60))
			if (timeGap < 1) timeGap = 'just now'
			else if ( timeGap > 1 && timeGap < 60) timeGap = `${timeGap} minutes ago`
			else if ( timeGap >= 60) timeGap = `${Math.floor(timeGap/60)} hours ago`

			v.when = timeGap
			let life = Math.floor(((time-v.time) / 60 / 60))
			//console.log(Math.floor(timeGap/60))
			if( life < this.state.lifeTime) {
				playList = [v,...playList]
				this.setState({
					currentVideoIndex: this.state.currentVideoIndex+1
				})
			}
		}
		//console.log(playList)
		this.setState({
			myPlayList: playList
		})
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
			vid: v.id.videoId,
			shareActive: false,
			comments: '',
			uuid: uuid()
		}
		let playList = this.state.myPlayList
		let index = this.state.currentVideoIndex
		//add this video to playlist
		//if( playList.length != 0 ) index = index
		playList.splice(index,0,video)
		//keep the limit videos
		/*
		if( playList.length > this.state.playListVideosLimit ){
			playList.splice(0,1)
			index--
		}*/
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
			vid: v.id.videoId,
			comments: '',
			shareActive: false,
			uuid: uuid()
		}
		let myPlayList = new Array()
		myPlayList = this.state.myPlayList
		myPlayList.push(video)
		//keep the limit videos
		/*
		if(myPlayList.length > this.state.playListVideosLimit ) {
			myPlayList.splice(0,1)
			//if current index is first video will turn to this new first video
			if(this.state.currentVideoIndex == 0){
				let vid = myPlayList[0].vid
				this.setState({
					videoId: vid
				})
			}else{
				this.setState({
					currentVideoIndex: this.state.currentVideoIndex - 1
				})
			}
		}*/
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
	shareVideo(vid,index){
		let playList = this.state.myPlayList
		playList[index].shareActive = true
		this.setState({
			myPlayList: playList,
			mySharedVideoUuid: playList[index].uuid
		})
	}
	handleComment(index,comment,userName){
		let playList = this.state.myPlayList
		let channel = playList[index].channel
		let user = userName==''?'路人':userName
		playList[index].channel = user +' shared '+channel +'\'s video' 
		playList[index].comments = comment
		playList[index].shareActive = false
		let _this = this
		shareVideoToOthers(playList[index]).then(data=>{
			playList[index] = data
			_this.setState({
				myPlayList: playList
			})
		})
	}
}