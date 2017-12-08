import React from 'react'
import ReactDOM from 'react-dom'
import './video-room.sass'
import uuid from 'uuid/v4'
import VideoList from 'components/video-list.jsx'
import UserBoard from 'components/user-board.jsx'
import {getSearchVideos,sayHello} from 'api/youtube-request.js'
import Youtube from 'react-youtube'
import {listShareVideos,shareVideoToOthers,onShareVideos,shootMsgOnPost} from 'api/share-video.js'

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
			lifeTime: 24,
			videoMsg: [
				{
					time: 100,
					msg: '6666666666'
				}
			],
			danmuStyle: {
				left: 0
			},
			initStatus: false,
			loading: false,
			userBoxStatus: false
		}
		this.time = 0
		this.timerfunc = null
		this.searchOver = false
		this.colorList = ['yellow','green','orange','white']
		this.handleInput = this.handleInput.bind(this)
		this.handlekeyPress = this.handlekeyPress.bind(this)
		this.playVideo = this.playVideo.bind(this)
		this.cancelSearching = this.cancelSearching.bind(this)
		this.playOtherVideos = this.playOtherVideos.bind(this)
		this.handlePlayList = this.handlePlayList.bind(this)
		this.shareVideo = this.shareVideo.bind(this)
		this.handleComment = this.handleComment.bind(this)
		this.addSharedVideo = this.addSharedVideo.bind(this)
		this.onVideoState = this.onVideoState.bind(this)
		this.onStop = this.onStop.bind(this)
		this.timer = this.timer.bind(this)
		this.shootMsg = this.shootMsg.bind(this)
		this.initDanmuTime = this.initDanmuTime.bind(this)
		this.loading = this.loading.bind(this)
		this.showUserBox = this.showUserBox.bind(this)
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
		let danmuMsg = null
		let _this = this
		//set video to default danmu position
		let video = this.state.danmuStyle
		if(this.state.initStatus){
		    video = this.state.myPlayList[this.state.currentVideoIndex]
			if(video.danmuMsg.length != 0 && video.danmuMsg !== 0){
				let count = 0
				danmuMsg = video.danmuMsg.map(v=>{
					count++
					return(
						<span className="danmu-msg" style={{left: `${v.left}px`,top: `${v.top}px`,color: v.color}} key={count}>
							{v.msg}
						</span>
					)
				})
			}
			video = video.danmuStyle
		}
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

		let loading = null
	    if( this.state.loading) loading = (<div className="loading">added</div>)
		//style for video frame
		//initial state/
		const opts = {
	      height: '100%',
	      width: '100%',
	      playerVars: { // https://developers.google.com/youtube/player_parameters
	        autoplay: 0
	      }
	    };
	    //change to autoplay after playing videos//
	    if(this.state.initStatus){
	    	//console.log('init')
	    	opts.playerVars.autoplay = 1
	    }
	    let currentIndex = this.state.currentVideoIndex
	    let displayBoardStyle = {
	    	marginLeft: '0px'
	    }
	    if (this.state.userBoxStatus) displayBoardStyle.marginLeft = '-300px'
		return (
			<div className="room-board">
				<div id="display-board" style={displayBoardStyle}>
					<header>
					 	<div className="search-box" onMouseLeave={this.cancelSearching}
					 								onMouseOver={()=>{ _this.searchOver = true}}>
					 		<input className="search-input" placeholder="search videos" 
					 				value={this.state.inputText}
					 				onChange={this.handleInput}
					 				onKeyPress={this.handlekeyPress}/>
					 		<div className="search-video-container">
					 			{ searchResultsDOM }
					 		</div>
					 	</div>
					 	<div id="profile">
					 		<img src="./img/profile.png" onClick={this.showUserBox}/>
		
					 	</div>
				 	</header>
					<div className="container">
						<div id="player">
							<div className="danmu-frame">
								<div className="danmu" style={{ marginLeft: `calc(100% - ${video.left}px)`}}>
									{danmuMsg}
								</div>
							</div>
							<Youtube  videoId={this.state.videoId} 
										opts={opts}
										onEnd={this.playOtherVideos}
										onPlay={this.onVideoState}
										onPause={this.onStop}/>
		
						</div>
						<VideoList playList={this.state.myPlayList} 
									currentIndex={this.handlePlayList} 
									activeVideo={currentIndex}
									shareVideo={this.shareVideo}
									handleComment={this.handleComment}
									shootMsg={this.shootMsg}/>
					</div>
				{loading}
				</div>
				<UserBoard/>
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
			if (timeGap <= 1) timeGap = 'just now'
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
				if(this.state.videoId === ''){
					this.setState({
						videoId: playList[0].vid,
						currentVideoIndex: 0
					})
				}
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
				//console.log(videos)
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
		this.clearTimer()
		this.initDanmuTime()
		let video = {
			channel: v.snippet.channelTitle,
			title: v.snippet.title,
			imgUrl: v.snippet.thumbnails.default.url,
			vid: v.id.videoId,
			shareActive: false,
			comments: '',
			uuid: uuid(),
			danmuStyle:{
				left: 0
			},
			danmuMsg: 0
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
			currentVideoIndex: index,
			initStatus:true
		})
	}
	cancelSearching(){
		let _this = this
		this.searchOver = false
		setTimeout(function(){
			if(!_this.searchOver){
				_this.setState({
					searchResults: []
				})
			}
		},1000)
	}
	addToPlayList(v){
		let video = {
			channel: v.snippet.channelTitle,
			title: v.snippet.title,
			imgUrl: v.snippet.thumbnails.default.url,
			vid: v.id.videoId,
			comments: '',
			shareActive: false,
			uuid: uuid(),
			danmuStyle:{
				left: 0
			},
			danmuMsg: 0
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
			loading: true,
			myPlayList: myPlayList
		})
		setTimeout(this.loading,600)
	}
	loading(){
		this.setState({
			loading: false
		})
	}
	playOtherVideos(){
		//this.clearTimer()
		//console.log('here')
		if(this.state.myPlayList != []) {
			let index = this.state.currentVideoIndex
			index++
			if(index < this.state.myPlayList.length){
				let vid = this.state.myPlayList[index].vid
				this.setState({
					videoId: vid,
					currentVideoIndex: index,
					initStatus: true
				})
			}
			//if( index < this.state.myPlayList.length - 1 ){
			//}
		}
	}
	handlePlayList(vid,index){
		this.setState({
				videoId: vid,
				currentVideoIndex: index,
				initStatus: true
			})
		this.clearTimer()
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
	onVideoState(e){
		let _this = this
		//this.time = 0
		//console.log('now time:'+ this.time)
		this.setState({
			initStatus: true
		})
		this.timerfunc = setInterval(_this.timer,100)
	}
	timer(){
		this.time++
		let timeRecord = this.time*10
		let movePerSecMinSec = timeRecord/2
		let movePerSec = 5*this.time
		let playList = this.state.myPlayList
	 	playList[this.state.currentVideoIndex].danmuStyle.left = movePerSec
	 	this.setState({
	 		myPlayList: playList
	 	})
	 	/*
		this.setState({
			danmuStyle: {
				left: timeRecord/2
			}
		})*/
		//console.log(this.time)

	}
	clearTimer(){
		let _this = this
		clearInterval(_this.timerfunc)
		this.time = 0
		this.initDanmuTime()
	}
	shootMsg(index,msg){
		if( index === this.state.currentVideoIndex ){
			let randomIndex = parseInt((Math.random()*this.colorList.length))
			let color = this.colorList[randomIndex]
			let playList = this.state.myPlayList
			let top = parseInt(Math.random()*120)
			if(playList[index].danmuMsg === 0)
				playList[index].danmuMsg = []
			playList[index].danmuMsg.push({
				left: 5*this.time,
				top: top,
				msg: msg,
				color: color
			})
			//update on firebase
			shootMsgOnPost(playList[index].key,playList[index].danmuMsg)
			this.setState({
				myPlayList: playList
			})
		}
	}
	onStop(){
		let _this = this
		clearInterval(_this.timerfunc)
	}

	initDanmuTime(){
		let index = this.state.currentVideoIndex
		let videos = this.state.myPlayList
		//console.log('danmuStyle left:'+videos[index].danmuStyle)
		videos[index].danmuStyle.left = 0
		this.setState({
			myPlayList: videos
		})
	}

	showUserBox(){
		let status = this.state.userBoxStatus
		this.setState({
			userBoxStatus: !status
		})
	}

}


