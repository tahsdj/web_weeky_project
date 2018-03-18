import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import './comic-info-page.sass'
import comicData from 'api/get-comics.js'
import {connect} from 'react-redux'
import {getComics,getComicInfo} from '../state/getComics.js'

class ComicInfoPage extends React.Component{
	constructor(props) {
		super(props)
		/*
		this.state = {
			name: '',
			episodes: [],
			url: ''
		}*/
	}
	componentWillMount() {
		//test
		/*
		const comicInfo = comicData()
		const cid = this.props.cid
		this.setState({
			name: comicInfo[cid].name,
			episodes: comicInfo[cid].episodes,
			url: comicInfo[cid].imageUrl
		})
		*/
		const cid = this.props.cid
		this.props.dispatch(getComicInfo(cid))

		//this.name = this.props.comics[cid].name
		//this.episodes = this.props.comics[cid].episodes
		//this.url = this.props.comics[cid].imageUrl
	}
	render() {
		let episodeDom = []
		let episodes = this.props.info.episodes
		let url = this.props.info.url
		let cid = this.props.cid

		for ( let episode in episodes ) {
			let ep = episode
			if ( episode.length == 1 ) ep = '00' + episode
			if ( episode.length == 2)  ep = '0' + episode
			episodeDom.push(
					<div className = "episode-index" >
						<Link to = {`/${cid}/${episode}`}>
							<span> {`第 ${ep} 話`} </span>
						</Link>
					</div>
			)
		}
		

		return (
			<div className = "comic-info-container">
				<div className = "info-main-container" >
					<div className = "comic-image">
						<img src = {url}/>
					</div>
					<div className = "description">

					</div>
				</div>
				<div className = "episode-container">
					{episodeDom}
				</div>
			</div>
		)
	}
}

export default connect( state => (
		{
			loadingStatus: state.comics.loadingStatus,
			info: state.comics.info
		}
	)
)(ComicInfoPage)