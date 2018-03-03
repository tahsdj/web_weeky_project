import React from 'react'
import ReactDOM from 'react-dom'
import './main.sass'
import InfoCard from 'components/info-card.jsx'
import {compose, applyMiddleware, createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {timer,data} from 'state/data-handler.js'
import {post,user,notification,story} from 'state/post-handler.js'
import {newData,userStatus,items,animation} from 'state/time-handler.js' 
import PostContainer from 'components/post-container.jsx'
import UserInfo from 'components/user-info.jsx'
import Header from 'components/header.jsx'

export default class Main extends React.Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		this.store = createStore(combineReducers({
			timer,data,post,user,notification,story,items, newData, userStatus,animation
		}),compose(applyMiddleware(thunkMiddleware)))
		let _this = this
		this.store.subscribe(() => {
			//console.log(_this.store.getState());
		})
	}
	componentDidMount() {
		console.log('%c 不要看XDD', 'color: red; font-size: 5em')
	}
	render() {
		
		return (
			<Provider store = {this.store} >
				<div id = "main-container">
					<Header/>
					<PostContainer/>
				</div>
			</Provider>
		)
	}
}

