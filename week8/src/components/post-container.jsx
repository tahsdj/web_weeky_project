import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import PostCard from 'components/post-card.jsx'
import {startPostTimer,clickStory,closeAll} from 'state/post-handler.js'
import {calcTimeInterval,travelAnimation,notification} from 'state/time-handler.js'
import './post-container.sass'
import NotifyBox from 'components/notify-box.jsx'
import Story from 'components/story.jsx'

class PostContainer extends React.Component {
	constructor(props) {
		super(props)
		this.timer = null
	}
	componentWillMount() {
		this.props.dispatch(travelAnimation())
	}
	componentDidMount() {
		//this.props.dispatch(startPostTimer())
		this.props.dispatch(calcTimeInterval())
	}
	render() {
		let postCard = []
		let notifyCards = []
		//console.log('posts: ', this.props.destinationAll)
		postCard = this.props.posts.map( (p,index) => {
				return	(<PostCard  placeName={p.name} img={p.imageUrl} key={'post'+ index}/>)		
			})
		notifyCards = this.props.notifications.map( (p,index) => {
				let notify = (<NotifyCard
									action={p.action} 
									npc={p.npc} 
									img={p.npcImg} 
									info={p.description}
									money={p.money}
									reputation={p.reputation}
									blood={p.hp}
									exp={p.experience}
									onClick={()=>this.props.dispatch(clickStory(p))}
									user={{hp: this.props.userHp, money: this.props.money}}
									key={'notification' + index}
									/>)
				return notify 
			})
		//postCard = postCard.filter( (p,i) => i < 5)
		let checkInContent = null
		if ( this.props.posts.length === 0 ){
			checkInContent = (
				<div className="no-info" >
					目前他還懶得打卡
				</div>
			)
		}
		else {
			checkInContent = (
				<div>
					<img src="icons/close.png" className="close-btn"  onClick={()=>{this.props.dispatch(closeAll())}}/>
					<div className="info-container">
						<div className="user-layout">
							<img className="check-in" src="icons/location.png"/>
						</div>
						
						<span>{this.props.posts[0].name}</span>
					</div>
					<div className= "photo-layout">
						<img src={this.props.posts[0].imageUrl}/>
					</div>
				</div>
			)
		}
		// template for animation
		let animationTemplate = null
		
		if ( this.props.userHp <= 100 ) {
			animationTemplate = (
				<div>
					<div className="images-container">
						<img src="http://www.gametsg.com/temppic_paperdoll/db7edb7a7c5e81195ab7781c8652026d.gif"/>
						<span className="nine" style={{opacity: `${this.props.status >= 2?1:0}`}}>救</span>
						<span className="five" style={{opacity: `${this.props.status >= 3?1:0}`}}>我</span>
					</div>
					<span className="description">瀕臨死亡...</span>
				</div>
			)
		}else {
			if ( this.props.time.hour <= 7 || this.props.time.hour >= 23 ) {
				animationTemplate = (
					<div>
						<div className="images-container">
							<img src="http://www.gametsg.com/temppic_paperdoll/c216919cad379c211b9b6052168714db.png"/>
							<span className = "z1" style={{opacity: `${this.props.status >= 2?1:0}`}}>Z</span>
							<span className = "z2" style={{opacity: `${this.props.status >= 3?1:0}`}}>Z</span>
							<span className = "z3" style={{opacity: `${this.props.status >= 4?1:0}`}}>Z</span>
						</div>
						<span>睡覺中...</span>
					</div>	
				)
			}else if( (this.props.time.hour <= 19 && this.props.time.hour >= 20) || (this.props.time.hour <= 14 && this.props.time.hour >= 13)) {
				animationTemplate = (
					<div>
						<div className="images-container">
							<img src="http://www.gametsg.com/temppic_paperdoll/61ae170fa43b3741035ed04222e0cb5a.png" />
							<div className = "color c1" style={{opacity: `${this.props.status === 7?1:0}`}}></div>
							<div className = "color c2" style={{opacity: `${this.props.status === 1?1:0}`}}></div>
							<div className = "color c3" style={{opacity: `${this.props.status === 2?1:0}`}}></div>
							<div className = "color c4" style={{opacity: `${this.props.status === 3?1:0}`}}></div>
							<div className = "color c5" style={{opacity: `${this.props.status === 4?1:0}`}}></div>
							<div className = "color c3" style={{opacity: `${this.props.status === 5?1:0}`}}></div>
							<div className = "color c4" style={{opacity: `${this.props.status === 6?1:0}`}}></div>
						</div>
						<span>耍廢中...</span>
					</div>
				)
			}else {
				animationTemplate = (
					<div>
						<div className="images-container">
							<img src="http://s3.heyxus.com/maple/custom/monster/large/mo006001.gif" 
									style = {{transform: `translateY(${this.props.status===1?'-10px':'0px'})`}} />
							<img src="http://s1.heyxus.com/maple/custom/npc/np_v119.gif"
									style = {{transform: `translateY(${this.props.status===2?'-10px':'0px'})`}} />
							<img src="http://s4.heyxus.com/maple/custom/monster/large/mo010001.gif"
									style = {{transform: `translateY(${this.props.status===3?'-10px':'0px'})`}} />
						</div>
						<span>旅行中...</span>
					</div>
				)
			}
		}
		
		return (
			<div className="posts-container" >
				<div className = "for-click-event" onClick={()=>{this.props.dispatch(closeAll())}}>
				</div>
				<NotifyBox notifications = {notifyCards} />
				
				{ !this.props.photoClicked && (<div className ="traveling-container">
							{animationTemplate}
						</div>
					)
				}
				{ this.props.photoClicked && (<div className = "photo-container col">
					{checkInContent}
				</div>)
				}
				<div className={(this.props.clicked)?'filter':'hidden'}>

				</div>
				<Story/>

			</div>
		)
	}
}
//#ff00005c
//#b4ff005c
//#00f3ff5c
//#ccff005c
//#00d0ff5c
/*
<img src="http://www.gametsg.com/temppic_paperdoll/c216919cad379c211b9b6052168714db.png"/>
<span className = "z1" style={{opacity: `${this.props.status >= 2?1:0}`}}>Z</span>
<span className = "z2" style={{opacity: `${this.props.status >= 3?1:0}`}}>Z</span>
<span className = "z3" style={{opacity: `${this.props.status >= 4?1:0}`}}>Z</span>
*/

/*

<img src="http://s3.heyxus.com/maple/custom/monster/large/mo006001.gif" 
		style = {{transform: `translateY(${this.props.status===1?'-10px':'0px'})`}}
	/>
<img src="http://s1.heyxus.com/maple/custom/npc/np_v119.gif"
		style = {{transform: `translateY(${this.props.status===2?'-10px':'0px'})`}}
/>
<img src="http://s4.heyxus.com/maple/custom/monster/large/mo010001.gif"
		style = {{transform: `translateY(${this.props.status===3?'-10px':'0px'})`}}
/>
*/

export default connect( state => (
	{
		posts: state.newData.posts,
		notifications: state.newData.notifications,
		postStatus: state.data.postStatus,
		userHp: state.userStatus.hp,
		userMoney: state.userStatus.money,
		status: state.animation,
		clicked: state.notification.clicked,
		photoClicked: state.notification.photoClicked,
		time: state.userStatus.time
	}
))(PostContainer)


let NotifyCard = (props) => {
	let content = null
	if (props.action === 1) {
		let reward = (
				<div className="reward-container">
					<div className = {"item"+(props.money===0?" hidden":"")} > 
						<img src="icons/coin.png" className="info-icon"/>
						<span className = {props.money<0?'negative':'positive'}>{props.money>0?'+'+props.money:props.money}</span>
					</div>
					<div className = {"item"+(props.reputation===0?" hidden":"")}> 
						<img src="icons/reputation.png" className="info-icon"/>
						<span className = {props.reputation<0?'negative':'positive'}>{props.reputation>0?'+'+props.reputation:props.reputation}</span>
					</div>
					<div className = {"item"+(props.blood===0?" hidden":"")}> 
						<img src="icons/blood.png" className="info-icon"/>
						<span className = {props.blood<0?'negative':'positive'}>{props.blood>0?'+'+props.blood:props.blood}</span>
					</div>
					<div className = {"item"+(props.exp===0?" hidden":"")}> 
						<img src="icons/exp.png" className="info-icon"/>
						<span className = {props.exp<0?'negative':'positive'}>{props.exp>0?'+'+props.exp:props.exp}</span>
					</div>
				</div>
			)
		let alertMsg = (
				<div className="reward-container">
					<span className = "alert-msg" style={{padding: '5px 0px',fontSize: '0.65em',color: 'red'}}>血量不足,無法執行任務</span>
				</div>
			)
		content = (
			<div className="card-container">
				<img className="npc-img" src={props.img} />
				<div className="info">
					<span className="title">
						{props.npc}
					</span>
					<span className="description">
						{props.info}
					</span>
					{ props.user.hp > 0 ? reward : alertMsg}
				</div>
			</div>
		)
	}
	if ( props.action === 2 ) {
		content = (
			<div className="card-container" style={{paddingBottom: '10px'}}>
				<img className="npc-img" src={props.img}/>
				<div className="info">
					<span className="title">
						{props.npc}
					</span>
					<span className="description">
						{props.info}
					</span>
					<div className="reward-container">
						
					</div>
				</div>
				<div className="btn-container">
					
				</div>
			</div>
		)
	}
	return (
		<div className="notification-card" onClick = {props.onClick}>
			{content}
		</div>
	)
}



let BossBox = (props) => {
	return (
		<div className="boss-container">
			<div className="boss-header-container">
				<img src="http://gametsg.techbang.com/maplestory/icon_small_npc/7363e3ae596cecf19d16b41b3bc9a317.png"/>
				<div className="blood-container">
					<div className="max-blood">
						<div className="blood">
						</div>
					</div>
				</div>
			</div>
			<div className="battle-info-container">
				<h2>失敗</h2>
			</div>
			<div className="btn-container">
				<button>離開</button>
			</div>
		</div>
	)
}


