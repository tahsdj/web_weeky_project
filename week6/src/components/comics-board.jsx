import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import './comics-board.sass'
import comicsData from 'api/get-comics.js'
import {connect} from 'react-redux'
import {getComics} from '../state/getComics.js'

class ComicsBoard extends React.Component{
	constructor(props) {
		super(props)
		/*
		this.state = {
			comics: {}
		}*/
	}
	componentDidMount() {
		//test
		/*
		const data = comicsData()
		this.setState({
			comics: data
		})
		*/
		this.props.dispatch(getComics())
		
	}
	render() {
		let renderDom = []
		let comics = this.props.comics
		for ( let index in comics ){
			renderDom.push(<ComicsItem cid = {index} name = {comics[index].name} url = {comics[index].imageUrl}/>)
		}
		return (
			<div className = "comics-container">
				<div className = "wrap-container">
					{renderDom}
				</div>
			</div>
		)
	}
}

function ComicsItem(props) {
	let cid = props.cid
	let name = props.name
	let url = props.url
	return (
		<div className = "comics-item-container">
			<Link to={`/${cid}`}>
				<img src = {url}/>
				<div className = "caption">
						<span>{name}</span>
				</div>
			</Link>
		</div>
	)
}

export default connect( state => (
		{
			loadingStatus: state.comics.loadingStatus,
			comics: state.comics.data
		}
	)
)(ComicsBoard)