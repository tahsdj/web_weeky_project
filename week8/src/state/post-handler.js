import getSpotData from 'api/data.js'
import getPlayerData from 'api/user.js'

let dataInit = {
	destination: {},
	postSatus: false,
	destinationAll: [
	]
}


export function startPostTimer() {
	return (dispatch, state) => {
		postClock = setInterval(()=>{
			dispatch(postCard(globalStatus))
		},timeInterval*1000)
	}
}

let destinationAll = []
let tmpDestinations = []
let postClock = null
let globalStatus = false
let nowIndex = 0
let timeInterval = 1
let updating = false

function postCard(status) {
	// if the all temp desitination are posted , we get new post lists
	//console.log('t or f: '+ tmpDestinations )
	if (!updating) {
		if ( nowIndex === tmpDestinations.length || tmpDestinations.length === 0 ) {
			let destination = getSpotData()
			//restrict the level
			if ( userInfo.level - destination.level >= -3 && userInfo.level - destination.level <= 5 ) {
				// pass chrome notification
				if (false) {
					//if (this.permission === 'granted') {
						let notifyConfig = {
								body: '',
								icon: ''
							}
						notifyConfig.icon = destination.imageUrl
						notifyConfig.body = userInfo.name+'目前到'+destination.name+'了'
						let notif = new Notification('新景點', notifyConfig)
					//}
				}
				nowIndex = 0
				//flatten desitation and task
				let tasks = [...destination.tasks]
				//random order
				shuffleArray(tasks)

				destination = [destination,...tasks]
				//save to tmpDestinations
				tmpDestinations = destination
				console.log('temp: ', tmpDestinations)
			}
			else {
				nowIndex = 0
				tmpDestinations = []
			}
		}
		//console.log('skip')
		updating = true
		//each time add one post
		let time = 0.001
		if(tmpDestinations.length !== 0) {
			time = tmpDestinations[nowIndex].time?tmpDestinations[nowIndex].time : 1
			//console.log('nowIndex: ' + nowIndex)
			//console.log('time: ' + time)
			destinationAll = [tmpDestinations[nowIndex],...destinationAll]
		}
		globalStatus = !globalStatus
		return (dispatch,state) => {
			dispatch(waiting())
			setTimeout(()=>{
				dispatch(returnData(destinationAll,globalStatus))
				dispatch(updateUser())
				dispatch(updateItems())
			},time*10*1000)
		}
	}
	//return 
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    randomPick(array)
}

function randomPick(array) {
	// at least one task
	let num = Math.floor(array.length*Math.random())
	let remove_num = ( num === array.length)? 1: ( num > 5? 5: num)
	array.splice(-remove_num,remove_num)
}

function waiting() {
	return {
		type: '@USER/WAITING'
	}
}

function returnData(d,g) {
	updating = false
	nowIndex += 1
	return {
			type: '@DATA/POST_NEW_CARD',
			destinationAll: d,
			postStatus: g
		}
}


export function post ( state=dataInit, action ) {
	switch(action.type) {
		case '@DATA/GET_DATA_START':
			return {
				loadingStatus: action.loadingStatus,
				destination: {},
				destinationAll: []
			}
		case '@DATA/GET_DATA_END':
			return {
				loadingStatus: action.loadingStatus,
				destination: action.destination,
				destinationAll: action.destinationAll
			}
		case '@DATA/POST_NEW_CARD':
			return {
				loadingStatus: false,
				destinationAll: action.destinationAll,
				postStatus: action.postStatus
			}
		default:
			return state
	}
}



export function getUserData() {
	return (dispatch, state) => {
		dispatch(getUserStart())
		setTimeout(()=> {
			let data =  getPlayerData()
			dispatch(getUserEnd(data))
		},100)
	}
}

function getUserStart() {
	return {
		type: '@USER/GET_START',
		loadingStatus: true
	}
}

function getUserEnd(data) {
	let user = data
	user.posts = []
	user.loadingStatus = false
	user.updated = false
	userInfo = user
	return {
		type: '@USER/GET_END'
	}
}

function updateUser() {
	if(tmpDestinations.length !== 0) {
		let task = tmpDestinations[nowIndex]
		userInfo.posts = [task,...userInfo.posts]
		if (task.action === 1) {
			console.log('---------------------------------------------------------------------------')
			userInfo.money += task.money
			userInfo.reputation += task.reputation
			userInfo.hp = (userInfo.hp+task.hp > userInfo.maxHp()) ? userInfo.maxHp() : (( userInfo.hp+task.hp < 0 )? 0: userInfo.hp+task.hp)
			if (userInfo.hp === 0) task.experience -= Math.floor(userInfo.maxExperience()*0.07)
			userInfo.totalExperience += task.experience
			let tmp = userInfo.experience
			let maxEx = userInfo.maxExperience()
			let levelBefore = userInfo.level
			userInfo.level = (tmp+task.experience >= maxEx)? userInfo.level+1: userInfo.level
			if (levelBefore <  userInfo.level ) userInfo.hp = userInfo.maxHp() //if level up , bool will be full
			//userInfo.maxExperience()
			userInfo.experience = (tmp+task.experience >= maxEx) ? (tmp+task.experience-maxEx): (tmp+task.experience)
			if (userInfo.hp !== 0 && userInfo.items.length < 20 && task.items.length !== 0) {
				let randomIndex = Math.floor(Math.random()*task.items.length)
				let possibility = task.items[randomIndex].possibility
				if ( possibility >= Math.random() ) {
					userInfo.items = [...userInfo.items, task.items[randomIndex]]
					userItems = [...userItems, task.items[randomIndex]]
				}
			} 
		}
	}
	return {
			type: '@USER/UPDATE_USER'
		}
}

let userInit = {
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
		//console.log('now level: ' + this.level)
		return this.level*250 - 100
	},
	loadingStatus: false,
	updated: false,
	posts: [],
	items: []
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
		//console.log('now level: ' + this.level)
		return this.level*250 - 100
	},
	loadingStatus: false,
	updated: false,
	posts: [],
	items: []
}

export function user(state=userInit, action ) {
	switch(action.type) {
		case '@USER/GET_START':
			return userInit
		case '@USER/GET_END':
			return userInfo
		case '@USER/UPDATE_USER':
			return userInfo
		case '@USER/WAITING':
			return userInfo
		default:
			return state
	}
}

let userItems = []

export function items(state=userItems, action) {
	switch(action.type) {
		case '@ITEM/SELL':
			return userItems
		case '@ITEMS/UPDATE':
			return userItems
		default:
			return state
	}
}

export function sellItems(money, id) {
	console.log('money:', money)
	console.log('id', id)
	userInfo.money += money
	userInfo.items.splice(id,1)
	userItems.splice(id,1)
	//console.log('remove item: ' + userInfo.items.splice(id,1))
	return {
		type: '@ITEM/SELL'
	}
}

function updateItems() {
	return {
		type: '@ITEMS/UPDATE'
	}
}

let notificationInit = {
	clicked: false,
	userClicked: false,
	photoClicked: false,
	maxDisplay: 5
}
export function notification(state=notificationInit, action) {
	switch(action.type) {
		case '@NOTIFICATION/CLICK':
			return {
				clicked: action.clicked,
				userClicked: action.userClicked,
				photoClicked: false,
				maxDisplay: notificationInit.maxDisplay
			}
		case '@USER/CLICK':
			return {
				clicked: action.clicked,
				userClicked: action.userClicked,
				photoClicked: false,
				maxDisplay: notificationInit.maxDisplay
			}
		case '@NOTIFICATION/LOAD_MORE':
			return {
				clicked: true,
				userClicked: notificationInit.userClicked,
				photoClicked: false,
				maxDisplay: action.maxDisplay
			}
		case '@PHOTO/CLICK':
			return {
				clicked: false,
				userClicked: false,
				photoClicked: action.photoClicked,
				maxDisplay: notificationInit.maxDisplay
			}
		case '@INFO/CLOSE':
			return notificationInit
			
		default:
			return state
	}
}

export function clickNotification(notiState,userState) {
	return {
		type: '@NOTIFICATION/CLICK',
		clicked: !notiState,
		userClicked: userState
	}
}

export function loadMore(num) {
	return {
		type: '@NOTIFICATION/LOAD_MORE',
		maxDisplay: num+5
	}
}

export function clickUser(notiState,userState) {
	return {
		type: '@USER/CLICK',
		clicked: notiState,
		userClicked: !userState
	}
}

export function clickPhoto(state) {
	return {
		type: '@PHOTO/CLICK',
		photoClicked: !state
	}
}

export function closeAll() {
	return {
		type: '@INFO/CLOSE'
	}
}

let storyInit = {
	title: '',
	npc: '',
	npcImage: '',
	position: '',
	story: [],
	clicked: false,
	action: 1,
	currentBlood: 9999,
	bossMaxHp: 9999 
}

export function story ( state=storyInit, action ) {
	switch(action.type) {
		case '@STORY/CLICK':
			return {
				title: action.title,
				npc: action.npc,
				npcImage: action.npcImage,
				position: action.position,
				story: action.story,
				clicked: action.clicked,
				action: action.action,
				currentBlood: action.currentBlood,
				bossMaxHp: action.bossMaxHp,
				rewards: action.rewards
			}
		case '@STORY/CLOSE':
			return storyInit
		default:
			return state
	}
}

export function clickStory(task) {
	return {
		type: '@STORY/CLICK',
		title: task.npc,
		npc: task.npcName,
		npcImage: task.npcImg,
		position: '',
		story: task.detail,
		clicked: true,
		action: task.action,
		currentBlood: task.action===2?task.currentBlood: 9999,
		bossMaxHp: task.action===2?task.blood: 9999,
		rewards: task.rewards
	}
}

export function closeStory() {
	return {
		type: '@STORY/CLOSE'
	}
}