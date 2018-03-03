import React from 'react'
import ReactDOM from 'react-dom'
import './story.sass'
import {connect} from 'react-redux'
import {clickStory,closeStory} from 'state/post-handler.js'

class Story extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		//let content = (this.props.notifications.length === 0)?'目前沒有任何通知': this.props.notifications
		let textDom = null
		let tempDom = null
		if (this.props.clicked) {
			if ( this.props.action !== 2 ) {
				textDom = this.props.story.map( s => {
					if (s.type === 0) {
						return (
							<div className="description row">
								<span>{s.text}</span>
							</div>
						)
					}
					if (s.type === 1) {
						return (
							<div className="npc-description row">
								<div className="npc-img-layout">
									<img className = "npc-img" src={s.imageUrl}/>
								</div>
								<span className = "text">
									{s.text}
								</span>
							</div>
						)
					}
					if (s.type === 2) {
						return (
							<div className="npc-description row">
								<div className="npc-img-layout">
									<img className = "npc-img user-img" src={this.props.userImage}/>
								</div>
								<span className = "text">
									{s.text}
								</span>
							</div>
						)
					}
				})
				let rewardDom = (
					<div className="reward-dom npc-description row">
						<span>獎勵: </span>
						<div className="img-container">
							<img src={this.props.rewards.length!=0?this.props.rewards[0].imageUrl:''}/>
						</div>
					</div>
				)
				tempDom = (
					<div className = "story-detail-container">
						<div className = "close-icon-container" onClick={()=>{this.props.dispatch(closeStory())}}>
							<img src="icons/close.png"/>
						</div>
						<div className = "content col">
							<h3>{this.props.title}</h3>
							<div className = "npc-container row">
								<img className = "npc-img" src={this.props.npcImage}/>
								<div className = "npc-info col">
									<span className = "npc-name">{this.props.npc}</span>
									<span className = "npc-position">{this.props.position}</span>
								</div>
							</div>
							{textDom}
						</div>
						{rewardDom}
					</div>
				)
			}else {

				tempDom = (
					<div className="boss-container story-detail-container">
						<div className = "close-icon-container" onClick={()=>{this.props.dispatch(closeStory())}}>
							<img src="icons/close.png"/>
						</div>
						<div className="boss-header-container">
							<img src="http://gametsg.techbang.com/maplestory/icon_small_npc/7363e3ae596cecf19d16b41b3bc9a317.png"/>
							<div className="blood-container">
								<div className="max-blood">
									<div className="blood" style = {{width:`${100*(this.props.bossHp/this.props.bossMaxHp)}%`}}>
									</div>
								</div>
							</div>
						</div>
						<div className="battle-info-container">
							<h2>{this.props.bossHp===0?'勝利':'失敗'}</h2>
						</div>
						<div className="description row">
							<span style={{'padding': '10px 10px 20px 10px'}}>{this.props.story[0].text}</span>
						</div>
					</div>
				)
			}
		}
		return (
			( this.props.clicked && tempDom)
		)
	}
}

export default connect( state => (
		{
			clicked: state.story.clicked,
			title: state.story.title,
			npc: state.story.npc,
			action: state.story.action,
			bossHp: state.story.action===2?state.story.currentBlood: 9999,
			bossMaxHp: state.story.action===2?state.story.bossMaxHp: 0,
			npcImage: state.story.npcImage,
			position: state.story.position,
			story: state.story.story,
			rewards: state.story.rewards,
			userImage: 'http://www.gametsg.com/temppic_paperdoll/198ad25cb85f7f343e7fe5a37e660ecb.png'
		}
	))(Story)

/*
<div className="description row">
						<span>卡蜜拉拿著包裝漂亮的派的禮盒後叫我.</span>
					</div>
					<div className="npc-description row">
						<div className="npc-img-layout">
							<img className = "npc-img" src="http://gametsg.techbang.com/maplestory/icon_npc/4257ce2bb97395f7d881f349621c2eea.png"/>
						</div>
						<span className = "text">
							來！烤出美味的刺菇菇派包裝完畢！！還沒有去跟長老找招呼嗎?把這個交給長老去打招呼吧.
						</span>
					</div>
					<div className="npc-description row">
						<div className="npc-img-layout">
							<img className = "npc-img" src="http://gametsg.techbang.com/maplestory/icon_npc/4257ce2bb97395f7d881f349621c2eea.png"/>
						</div>
						<span className = "text">
							長老的話他在村莊中央上的公園入口。他有煩惱時常常在這附近徘迴。他最近離家出走的阿勒斯的關係感覺有很多煩腦。希望他可吃下這派後可舒服的休息。
						</span>
					</div>
					<div className="description row">
						<span>卡蜜拉委託我把裝飾成漂亮的派交給長老斯坦。在 弓箭手村 村莊中央的公園入口附近尋找長老斯坦。他好像非常喜歡派。</span>
					</div>
					<div className="npc-description row">
						<div className="npc-img-layout">
							<img className = "npc-img" src="http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png"/>
						</div>
						<span className = "text">
							你是誰?找我有什麼事情呢?在 弓箭手村 第一次看到的臉…
						</span>
					</div>
					<div className="npc-description row">
						<div className="npc-img-layout">
							<img className = "npc-img" src="https://i.gbc.tw/gb_img/3/000/044/44003.jpg"/>
						</div>
						<span className = "text">
							我的名字是 透小鏡 ,來到這裡沒有很久.想要打招呼,也想要把卡蜜拉製作的派交給您.請嚐嚐卡蜜拉製作的刺菇菇派味道.
						</span>
					</div>
					<div className="npc-description row">
						<div className="npc-img-layout">
							<img className = "npc-img" src="http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png"/>
						</div>
						<span className = "text">
							透小鏡 ！是你啊.從赫麗娜那裡聽說了.這裡那裡需要關心的事情較多...不管怎樣連我這老頭子都關心,請傳達謝謝的話.
						</span>
					</div>
*/