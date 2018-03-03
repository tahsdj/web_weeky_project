import getSpotData from 'api/data.js'

export function editHour(value) {
	time.hour = value
	return {
		type: '@TIME/EDIT_HOUR',
		hour: value
	}
}

export function editMinute(value) {
	time.minute = value 
	return {
		type: '@TIME/EDIT_MINUTE',
		minute: value
	}
}

export function editSecond(value) {
	time.second = value
	return {
		type: '@TIME/EDIT_SECOND',
		second: value
	}
}

let timer = null
export function countDown(second) {
	time.second = second
	return (dispatch, state) => {
		timer = setInterval(()=>dispatch(updateTime(time.second)),1000)
	}
}

function updateTime(second) {
	let start = true
	let end = false
	if ( time.hour === 0 && time.minute === 0 && time.second == 0 ) {
		clearInterval(timer)
		start = false
		end = true
	}else {
		if ( second == 0 ) {
			time.second = 59
			if ( time.minute == 0 ) {
				time.minute = 59
				time.hour = time.hour > 0 ? time.hour - 1: 0
			}
			else time.minute -= 1
		}
		else time.second -= 1
	}
	return {
		type: '@TIME/UPDATE_TIME',
		interupt: false,
		start: start,
		end: end
	}
}

export function reSet() {
	return {
		type: '@TIME/RESET'
	}
}

let timerInit = {
	hour: 0,
	minute: 0,
	second: 0,
	start: false,
	interupt: false,
	end: false
}

let time = {
	hour: 0,
	minute: 0,
	second: 0
}


export function timer ( state=timerInit, action ) {
	switch(action.type) {
		case '@TIME/EDIT_HOUR':
			return {
				hour: action.hour,
				minute: time.minute,
				second: time.second
			}
		case '@TIME/EDIT_MINUTE':
			return {
				hour: time.hour,
				minute: action.minute,
				second: time.second
			}
		case '@TIME/EDIT_SECOND':
			return {
				hour: time.hour,
				minute: time.minute,
				second: action.second
			}
		case '@TIME/UPDATE_TIME':
			return {
				hour: time.hour,
				minute: time.minute,
				second: time.second,
				start: action.start,
				end: action.end
			}
		case '@TIME/RESET':
			return timerInit
		default:
			return state
	}
}

let dataInit = {
	destination: {},
	postSatus: false,
	destinationAll: [
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'http://6.blog.xuite.net/6/d/2/c/237151235/blog_3204695/txt/72684064/0.jpg',
			name: '台北101',
			tasks: [
				{
					task: '逛街',
					cost: 2000,
					hapiness: 5
				},
				{
					task: '夾娃娃機',
					cost: 300,
					hapiness: 3
				},
				{
					task: '買CD',
					cost: 100,
					hapiness: 1
				},
				{
					task: '被貓王襲擊',
					cost: -50,
					hapiness: -5
				}
			]
		}
	]
}

let destinationAll = []

export function getDestination() {
	return (dispatch,state) => {
		dispatch(startGetData())
		setTimeout(()=>{
			dispatch(getDataEnd())
		},100)
	}
}

function startGetData() {
	return {
		type: '@DATA/GET_DATA_START',
		loadingStatus: true
	}
}

function getDataEnd() {
	let destination = getSpotData()
	//dispatch(postCard(destination))
	return {
		type: '@DATA/GET_DATA_END',
		loadingStatus: false,
		destination: destination
	}
}


export function startPostTimer() {
	let timeInterval = 10*1000
	return (dispatch, state) => {
		postClock = setInterval(()=>dispatch(postCard(globalStatus)),timeInterval)
	}
}

let postClock = null
let globalStatus = false

function postCard(status) {
	let destination = getSpotData()
	destinationAll = [destination,...destinationAll]
	globalStatus = !globalStatus
	return {
		type: '@DATA/POST_NEW_CARD',
		destinationAll: destinationAll,
		postStatus: globalStatus
	}
}

export function data ( state=dataInit, action ) {
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
