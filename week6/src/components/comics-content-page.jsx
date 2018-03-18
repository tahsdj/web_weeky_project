import React from 'react'
import ReactDOM from 'react-dom'
import './comics-content-page.sass'
import comicData from 'api/get-comics.js'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'

export default class ComicsContent extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			totalPages: 0,
			imgUrl: ''
		}
	}
	componentDidMount() {
		
		// get data from api code
		const data = comicData()
		const cid = this.props.cid
		this.setState({
			name: data[cid].name,
			imgUrl: data[cid].icon
		})
	}
	render() {
		window.scrollTo(0,0)
		const data = comicData()
		const cid = this.props.cid
		const episode = this.props.episode
		let num_page = data[cid].episodes[episode].pages
		//console.log(num_page)
		const pages = []
		const name = this.state.name
		const url = this.state.imgUrl
		//console.log(url)
		for ( let i = 0 ; i < num_page ; i++ ) {
			pages.push((<Page cid = {cid} page = {i+1} episode = {episode} key = {i} />))
		}
		return (
			<div className = "comics-content-container">
				<Header cid = {cid} name = {name} url = {url} episode = {episode} />
				{pages}
			</div>
		)
	}
}

function Header(props) {
	const url = props.url
	const name = props.name
	let episode = parseInt(props.episode)
	const cid = props.cid
	return (
		<div className = "comic-header">
			<div className = "comic-info-container">
				<div className = "comic-image">
					<Link to = {`/${cid}`}>
						<img src={`/${url}`}/>
					</Link>
				</div>
				<div className = "name info">
					{name}
				</div>
				<Link to = {`/${cid}/${episode - 1}`}>
					<img src = "/images/fast-rewind-button.png" className = "click-button"/>
				</Link>
				<div className = "ep info">
					{`第${episode}話`}
				</div>
				<Link to = {`/${cid}/${episode + 1}`}>
					<img src = "/images/fast-forward-button.png" className = "click-button"/>
				</Link>
			</div>
			<Link to = '/'>
				<img src = "/images/home.png"  className = "home-link" />
			</Link>
		</div>
	)
}

function Page(props) {

	let cid = props.cid
	let page = props.page
	let episode = props.episode

	//add zero for pages
	if ( page < 10 ) page = '00' + page
	else if ( page >= 10 && page < 100 ) page = '0' + page
	else page = page

	//add zero for episode
	if ( episode < 10 ) episode = '00' + episode
	else if ( episode >= 10 && episode < 100 ) episode = '0' + episode
	else episode = episode

	let imgUrl = `http://pic.8comic.se/wp-content/uploads/a04cj84wj6uq04/${cid}/${episode}/${page}.jpg`
	return (
		<div className = "page-container">
			<img src={imgUrl}/>
		</div>
	)
}