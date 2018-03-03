import React from 'react'
import ReactDOM from 'react-dom'
import './info-card.sass'
import {connect} from 'react-redux'
import {getUserData} from 'state/post-handler.js'
import './user-info.sass'
import ItemBox from 'components/item-box.jsx'


class UserInfo extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		//this.props.dispatch(getUserData())
	}
	render() {
		//if(this.props.maxHp) console.log('max hp: ', this.props.maxHp())
		//console.log(this.props.items)
		return (
			<div className="profile-info-container">
				<div className="profile-image-container">
					<img src="http://www.gametsg.com/temppic_paperdoll/198ad25cb85f7f343e7fe5a37e660ecb.png"/>
				</div>
				<div className="info-container">
					<div className="name info-row">
						<span>Lv{this.props.level} {this.props.name}</span>
					</div>
					<div className="money info-row">
						<img src="icons/coin.png" className="info-icon"/><span>{this.props.money}</span>
					</div>
					<div className="reputation info-row">
						<img src="icons/reputation.png" className="info-icon"/><span>{this.props.reputation}</span>
					</div>
					<div className="reputation info-row">
						<img src="icons/blood.png" className="info-icon"/>
						<div className="blood-container">
							<div className ="blood" style={{width: `${(this.props.hp/((this.props.maxHp)?this.props.maxHp():1))*100}%`}}>
							</div>
							<span>{this.props.hp}/{(this.props.maxHp)?this.props.maxHp():1}</span>
						</div>
					</div>
					<div className="reputation info-row">
						<img src="icons/exp.png" className="info-icon"/>
						<div className="exp-container">
							<div className ="exp" style={{width: `${(this.props.experience/((this.props.experience)?this.props.maxExperience():1))*100}%`}}>
							</div>
							<span>{this.props.experience}/{(this.props.maxExperience)?this.props.maxExperience():null}</span>
						</div>
					</div>
				</div>
				<ItemBox items = {this.props.posts}/>
			</div>
		)
	}
}

export default connect( state => (
		{
			name: state.userStatus.name,
			level: state.userStatus.level,
			money: state.userStatus.money,
			reputation: state.userStatus.reputation,
			maxHp: state.userStatus.maxHp,
			hp: state.userStatus.hp,
			experience: state.userStatus.experience,
			maxExperience: state.userStatus.maxExperience,
			loadingStatus: state.userStatus.loadingStatus,
			totalExperience: state.userStatus.totalExperience,
			updated: state.userStatus.updated,
			posts: state.userStatus.posts,
			items: state.userStatus.items
		}
	))(UserInfo)

/*
let ItemBox = (props) => {
	console.log('items: '+ props.items)
	let items = props.items
	let box = []
	for (let i = 0 ; i < 20 ; i++) {
		let boxDom = null
		if ( i < items.length ) {
			boxDom = (
				<div className = {items[i].type===0?"box item": (items[i].type === 1? "seldom box item":"rare box item")}>
					<img src = {items[i].imageUrl} />
					<div className = "item-info-container">
						<span>名稱</span>
						<span>$100</span>
						<button>販賣</button>
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

	return (
		<div className="item-box-container">
			<div className="item-box">
				{box}
			</div>
		</div>
	)
}

let itemInfo = (props) => {
	return (
		<div className = "item-info-container">
			<div className = "title-container">
				<h3>裝備名稱</h3>
			</div>
			<div className = "item-info">

			</div>
		</div>
	)
}

let itemList = [
	{
		img: 'http://gametsg.techbang.com/maplestory/icon_item/0e04796ab03ae007d9222657b6cf3d5b.png',
		type: 0
	},
	{
		img: 'http://gametsg.techbang.com/maplestory/icon_item/88244c421c61b99aa7e7857d8d8b58be.png',
		type: 2
	}
]

*/