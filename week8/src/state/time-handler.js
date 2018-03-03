//import getData from 'api/data.js'
import getSpotData from 'api/data.js'
import {saveUserData,getUserData} from 'api/save-user.js'
import getLithHarbor from 'api/lith-harbor.js'
import getHenesys from 'api/henesys.js'
import getEllinia from 'api/ellinia.js'
import getKerningCity from 'api/Kerning-city.js'

let userStartTime = 1000
let lastestCheckTime = 1000

export function calcTimeInterval() {
	// get current time status
	let d = new Date()
	let nowTime = d.getTime()
	let month = d.getMonth()
	let date = d.getDate()
	let hour = d.getHours()

	// get user data
	////console.log('user data: '+ getUserData('1003'))
	let data = getUserData('1234')
	//console.log('data: '+ data)
	let timeInterval = 0
	if ( data ) {
		userInfo = Object.assign(data)
		userInfo.maxExperience = function() {return this.level*250 - 100}
		userInfo.maxHp = function() {return this.level*100 + 200 }
		//console.log(userInfo)
		let latestPostTime = userInfo.posts.length!=0?userInfo.posts[0].timeState.time: 0
		let latestNotiTime = userInfo.notifications.length!=0?userInfo.notifications[0].timeState.time: 0
		//console.log('last post: ' + latestPostTime)
		//console.log('last not: '+ latestNotiTime)
		timeInterval = latestPostTime>latestNotiTime? (nowTime-latestPostTime): (nowTime-latestNotiTime)
		if (latestPostTime === 0 && latestNotiTime === 0) timeInterval = 1000*60*60*1.5*2
		//console.log('iter: '+timeInterval)
		//console.log('minutes: '+ timeInterval/(1000*60))
	}
	else {
		timeInterval = 1000*60*60*2
	}
	userInfo.time = {
		month: month,
		date: date,
		hour: hour
	}
	//console.log('now interval: '+ timeInterval/(1000*60))
	//calc the time Intervel
	//let timeInterval = 
	//timeInterval = 1000*60*60*1.2*3
	let threshold = 1000*60*60*1.2 + 1000*60*60*1*1*Math.random()
	//console.log('threshold: '+ threshold/(1000*60))

	// condition ---------------------------
	let working = false
	
	if ( hour <= 21 && hour >= 8 ) working = true 
	if ( (timeInterval >= threshold) && working) {
	//if ( true ) {
		if ( timeInterval/(1000*60*60) > 10 &&  hour < 11 ) { // tell if in the morning
			timeInterval = 1000*60*60*1.2*3
		}
		//console.log('add new post')
		return (dispatch,state) => dispatch(userDataAnalysis(timeInterval,threshold))
	}
	else return (dispatch, state) => {
		dispatch(noUpdate())
		//console.log('noti len: ' + userInfo.notifications.length )
		//if (userInfo.posts.length !== 0 ) dispatch(clearTimer())
	}
}

let user = {
	level: 1
}


function userDataAnalysis(t,thres) {
	//console.log('level: ' + userInfo.level)
	let data = getLithHarbor()
	data = [...getKerningCity(),...getEllinia(),...getHenesys(),...data]
	let spots = data.filter(s => (((s.level - userInfo.level <= 2) && (s.level - userInfo.level) >= 0) || ((userInfo.level - s.level <= 3)&&(userInfo.level - s.level >= 0))))
	//console.log(spots)
	let spotsNum = spots.length
	let pick_num = Math.floor( t / thres )
	//console.log('pick_num: ' + pick_num)
	pick_num = pick_num >= spotsNum ? spotsNum: pick_num 
	pick_num = pick_num >= 4 ? 4: pick_num //max four new data
	//console.log('pick_num: ' + pick_num)
	if ( pick_num > 0 ) {
		let pickSpots = shuffleArray(spots, pick_num)
		//console.log('pickSpots: '+ pickSpots)
		let d = new Date()
		let timeState = {
			time: d.getTime(),
			month: d.getMonth(),
			date: d.getDate(),
			hour: d.getHours()
		}
		let returnDatas = pickSpots.map( p => {
			p.timeState = timeState
			return p
		})
		userInfo.posts = [...returnDatas.filter( d => d.action === 0 ),...userInfo.posts]
		userInfo.notifications = [...returnDatas.filter( d => d.action >= 1 ),...userInfo.notifications]
		let action = {
			type: '@DATA/GET_NEW',
			posts: [...userInfo.posts],
			notifications: [...userInfo.notifications],
			newNotifications: returnDatas.filter( d => d.action >= 1 ).length,
			newPosts: returnDatas.filter(d => d.action === 0 ).length
		}
		let tempNotifications = [...returnDatas.filter( d => d.action >= 1 )]
		return (dispatch, state) => {
			dispatch(updateUser(userInfo,tempNotifications))
			dispatch(updateData(action))
			////console.log('noti len: ' + userInfo.notifications.length )
			//if (userInfo.posts.length !== 0 ) dispatch(clearTimer())
			dispatch(updateItems())
		}
	}
	else return (dispatch,state)=> {
		dispatch(noUpdate())
		//if (userInfo.posts.length !== 0 ) dispatch(clearTimer())
		dispatch(updateItems())
	}
}

function clearTimer() {
	clearInterval(animationIndex.timer)
	////console.log('timer: '+animationIndex.timer)
	////console.log('claerInterval...........................................')
	animationIndex.index = 0
	return {
		type: '@ANIMATION/INDEX',
		index: animationIndex.index
	}
}

function noUpdate() {
	return {
		type: '@DATA/NO_UPDATE'
	}
}
function updateData(action) {
	return action
}

function shuffleArray(array,num) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return randomPick(array,num)
}

function randomPick(array,num) {
	// at least one task
	let remove_num = num
	return array.splice(-remove_num,remove_num)
}


export function travelAnimation() {
	return (dispatch, state) => {
		animationIndex.timer = setInterval( ()=> {
			dispatch(changeAnimtation())
		},250)
	}
}

function changeAnimtation() {
	animationIndex.index += 1
	if (animationIndex.index > 7) animationIndex.index = 1
	return {
		type: '@ANIMATION/INDEX',
		index: animationIndex.index
	}
}

let animationIndex = {
	index: 0,
	timer: null
}

export function animation(state=animationIndex,action) {
	switch (action.type) {
		case '@ANIMATION/INDEX':
			return action.index
		default:
			return animationIndex.index
	}
}

let newData = {
	posts: [],
	notifications: [],
	newNotifications: 0,
	newPosts: 0
}



export function newData(state=newData, action) {
	switch(action.type) {
		case '@DATA/GET_NEW':
			return {
				posts: action.posts,
				notifications: action.notifications,
				newNotifications: action.newNotifications,
				newPosts: action.newPosts
			}
		case '@DATA/NO_UPDATE':
			return {
				posts: userInfo.posts,
				notifications: userInfo.notifications,
				newNotifications: 0,
				newPosts: 0
			}
		default:
			return state
	}
}


function updateUser(userInfo=userInfo,tasks) {
	
	////console.log('---------------------------------------------------------------------------')
	tasks.forEach( (task,index) => {
		userInfo.notifications[index].rewards = []
		if (userInfo.hp > 0) {
			if (task.action === 1) { // boss not include
				userGetReward(task,index)
			}
			if (task.action === 2) {
				////console.log('task action == 2')
				////console.log('task description: ' + task.description)
				let end = false
				let attackSide = 0 // 0: user, 1: boss
				////console.log('battle start-------')
				while( !end ) {
					let userAttack = userInfo.level*50 + 10
					if (attackSide === 0) {
						task.currentBlood -= userAttack
						if (task.currentBlood <= 0) {
							end = true
							userGetReward(task,index)
						}
						attackSide = 1
					}
					if (attackSide === 1) {
						userInfo.hp += task.hp
						if ( userInfo.hp <= 0) {
							end = true
							userInfo.hp = 0
						}
						attackSide = 0
					}
				}
			}
		}
	})
	saveUserData(userInfo)
	return {
			type: '@USER/UPDATE_USER'
		}
}

function userGetReward(task,index) {
	userInfo.money += task.money
	userInfo.reputation += task.reputation
	userInfo.hp = (userInfo.hp+task.hp > userInfo.maxHp()) ? userInfo.maxHp() : (( userInfo.hp+task.hp < 0 )? 0: userInfo.hp+task.hp)
	//if (!userhp) userInfo.hp = userhp // for victory on boss
	if (userInfo.hp === 0) task.experience -= Math.floor(userInfo.maxExperience()*0.07)
	userInfo.totalExperience += task.experience
	let tmp = userInfo.experience
	let maxEx = userInfo.maxExperience()
	let levelBefore = userInfo.level
	userInfo.level = (tmp+task.experience >= maxEx)? userInfo.level+1: userInfo.level
	if (levelBefore <  userInfo.level ) userInfo.hp = userInfo.maxHp() //if level up , bool will be full
	//userInfo.maxExperience()
	userInfo.experience = (tmp+task.experience >= maxEx) ? (tmp+task.experience-maxEx): (tmp+task.experience)
	//userInfo.notifications[index].rewards = []
	////console.log('index: '+ index)
	////console.log('new notifications content: '+userInfo.notifications[index])
	if (userInfo.hp !== 0 && userInfo.items.length < 20 && task.items.length !== 0) {
		let randomIndex = Math.floor(Math.random()*task.items.length)
		let possibility = task.items[randomIndex].possibility
		if ( possibility >= Math.random() ) {
			////console.log('new item: '+ task.items[randomIndex])
			userInfo.items =  [...userInfo.items,task.items[randomIndex]]
			userInfo.notifications[index].rewards = [task.items[randomIndex]]
		}
	} 
}

let userInfo = {
	name: '初心者',
	level: 1,
	money: 1000,
	reputation: 10,
	maxHp() { 
		return this.level*100 + 200 
	},
	hp: 300,
	experience: 0,
	totalExperience: 0,
	maxExperience() { 
		////console.log('now level: ' + this.level)
		return this.level*250 - 100
	},
	loadingStatus: false,
	updated: false,
	posts: [],
	notifications: [],
	items: [],
	position: 0, //0: lith-harbor,
	time: {
		month: 1,
		date: 1,
		hour: 1
	}
}

export function userStatus(state=userInfo, action ) {
	switch(action.type) {
		case '@USER/GET_START':
			return userInfo
		case '@USER/GET_END':
			return userInfo
		case '@USER/UPDATE_USER':
			return userInfo
		case '@USER/WAITING':
			return userInfo
		case '@USER/SELL_ITEMS':
			return userInfo
		case '@USER/GET_ITEMS':
			return userInfo
		default:
			return userInfo
	}
}

let itemInfo = []

export function items(state=[...userInfo.items], action) {
	switch(action.type) {
		case '@ITEMS/SELL_ITEMS':
			return action.items
		case '@ITEMS/GET_ITEMS':
			return action.items
		case '@ITEMS/UPDATE_ITEMS':
			return action.items
		case '@ITEMS/USE_ITEMS':
			return action.items
		default:
			return state
	}
}

export function sellItems(money, id) {
	//console.log('sell index: '+id)
	userInfo.money += money
	let r = userInfo.items.splice(id,1)
	//console.log('user items: ' + userInfo.items)
	//console.log('remove items: ' + r)
	//userInfo.items = []
	//userInfo.updated = !userInfo.updated 
	////console.log('remove item: ' + userInfo.items.splice(id,1))
	saveUserData(userInfo)
	return {
		type: '@ITEMS/SELL_ITEMS',
		items: [...userInfo.items]
	}
}

export function useItems(hp,id) {
	userInfo.hp += hp
	userInfo.hp = userInfo.hp >= userInfo.maxHp()? userInfo.maxHp(): userInfo.hp
	let r = userInfo.items.splice(id,1)

	saveUserData(userInfo)
	return {
		type: '@ITEMS/USE_ITEMS',
		items: [...userInfo.items]
	}
}

export function getItems() {
	return {
		type: '@ITEMS/GET_ITEMS',
		items: [...userInfo.items]
	}
}

function updateItems() {
	return {
		type: '@ITEMS/UPDATE_ITEMS',
		items: [...userInfo.items]
	}
}

