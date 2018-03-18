import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import './main.sass'
import ComicsBoard from 'components/comics-board.jsx'
import ComicsContent from 'components/comics-content-page.jsx'
import ComicInfoPage from 'components/comic-info-page.jsx'
import {compose, applyMiddleware, createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {getComics, comics} from '../state/getComics.js'

export default class Main extends React.Component{
	constructor(props){
		super(props)
	}
	componentWillMount(){
		this.store = createStore(combineReducers({
			comics
		}),compose(applyMiddleware(thunkMiddleware)))
		let _this = this
		this.store.subscribe(() => {
			console.log(_this.store.getState());
		})
	}
	render(){
		return (
			<Provider store = {this.store}>
				<Router>
					<div id = "main-page">
						<MainHeader/>
						<Route exact path = "/" render={ () => <ComicsBoard/> }/>
						<Route exact path = {"/:cid"} render={ (props)=> <ComicInfoPage cid = {props.match.params.cid}/>}/>
						<Route path = {"/:cid/:episode"} render={ (props)=> <ComicsContent 
																				cid = {props.match.params.cid} 
																				episode = {props.match.params.episode}/>}/>
					</div>			
				</Router>
			</Provider>
		)
	}
}
//<Route exact path = "/" render={ () => <ComicsBoard/> }/>


function MainHeader (props) {

	return (
		<div id = "main-header">
			<div className = "info-container">

			</div>
			<Link to = '/'>
				<img src = "/images/home.png"  className = "home-link" />
			</Link>
		</div>
	)
}