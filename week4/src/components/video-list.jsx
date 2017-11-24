import React from 'react'
import ReactDOM from 'react-dom'
import './video-list.sass'

export default class VideoList extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			videos: [],
			myCommemt: '',
			userName: ''
		}
		this.playVideo = this.playVideo.bind(this)
		this.shareVideo = this.shareVideo.bind(this)
		this.handleComment = this.handleComment.bind(this)
		this.handleInputComment = this.handleInputComment.bind(this)
		this.handleUserName = this.handleUserName.bind(this)
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
				let commentForm = v.shareActive?(
												<div className="comment-form">
													<input placeholder="your name" value={this.state.userName} onChange={this.handleUserName}/>
													<textarea placeholder="share your mood~" 
														onKeyPress={this.handleComment.bind(this,index)} 
														value={this.state.myCommemt}
														onChange={this.handleInputComment}>
													</textarea>
												</div>
												):null
				let comments = v.comments!=''?v.comments:v.title
				return (
					<div className={ (activeVideo == index)?"video-block playing":"video-block"} key={v.uuid+'playlist'}>
						<img className="video-img" src={v.imgUrl} onClick={this.playVideo.bind(this,v.vid,index)}/>
						<div className="video-detail">
							<div className="channel-name">
								{v.channel} <div className="when">{v.when}</div>
							</div>
							<div className="video-title">
								{comments}
							</div>
							<img src="img/share.png" className="share-icon" onClick={this.shareVideo.bind(this,v,index)}/>
							{ commentForm }
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
	shareVideo(v,index){
		if(v.comments == '')
			this.props.shareVideo(v.vid,index)
	}
	handleComment(index,e,skip){
		//console.log(index)
		//console.log(e.key)
		//console.log(skip)
		if (e.key === 'Enter' && this.state.myCommemt != '')
			this.props.handleComment(index,this.state.myCommemt,this.state.userName)
	}
	handleInputComment(e){
		let content = e.target.value
		this.setState({
			myCommemt: content
		})
	}
	handleUserName(e){
		let name = e.target.value
		this.setState({
			userName: name
		})
	}
}