import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {sellItems,getItems,getUserData,useItems} from 'state/time-handler.js'

class ItemBox extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		//this.props.dispatch(getItems())
		//console.log('items:: '+this.props.updated)
	}
	render() {
		let items = this.props.items
		let box = []
		console.log('items:: '+ items)
		box = items.map( (i,index) => {
			if (i.type <= 2) {
				return (
					<div className = {i.type===0?"box item": (i.type === 1? "seldom box item":"rare box item")} key={'item'+index}>
						<img src = {i.imageUrl} />
						<div className = "item-info-container">
							<span>{i.name}</span>
							<span>${i.money}</span>
							<button onClick = {()=>this.props.dispatch(sellItems(i.money,index))}>販賣</button>
						</div>
					</div>
				)
			}
			else if (i.type === 4) {
				return (
					<div className = "box item" key={'item'+index}>
						<img src = {i.imageUrl} />
						<div className = "item-info-container">
							<span>{i.name}</span>
							<span>hp+{i.hp}</span>
							<button onClick = {()=>this.props.dispatch(useItems(i.hp,index))}>使用</button>
						</div>
					</div>
				)
			}
		})
		let len = box.length
		for ( let i = 0 ; i < 20-len ; i++ ) {
			let boxTemp = (
					<div className = "box" key={'box'+i}>
					</div>
				)
			box = [...box, boxTemp]
		}
		/*
		for (let i = 0 ; i < 20 ; i++) {
			let boxDom = null
			console.log(items.length				)
			if ( i < items.length ) {
				boxDom = (
					<div className = {items[i].type===0?"box item": (items[i].type === 1? "seldom box item":"rare box item")}>
						<img src = {items[i].imageUrl} />
						<div className = "item-info-container">
							<span>名稱</span>
							<span>${items[i].money}</span>
							<button onClick = {()=>this.props.dispatch(sellItems(items[i].money,i))}>販賣</button>
						</div>
					</div>
				)
			}else {
				boxDom = (
					<div className = "box">
					</div>
				)
			}
			box = [...box,boxDom]
		}
		*/
		return (
			<div className="item-box-container">
				<div className="item-box">
					{box}
				</div>
			</div>
		)
	}
}


export default connect( state => (
	{
		items: state.items,
		updated: state.userStatus.updated
		//clicked: state.items.clicked
	}
))(ItemBox)


