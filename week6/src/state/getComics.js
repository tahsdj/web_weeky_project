import comicsData from 'api/get-comics.js'


//----------action generators-------------------

//get all comics
export function getComics() {
	return (dispatch, state) => {
		dispatch(startGetComics())
		let data = {}
		setTimeout(()=>{
			data = comicsData()
			dispatch(endGetComics(data))
		},700)
	}
}

//get one comic infomation
export function getComicInfo(cid) {
	return (dispatch, state) => {
		dispatch(startGetComics())
		let data = {}
		setTimeout(()=>{
			data = comicsData()
			let info = {
				name: data[cid].name,
				episodes: data[cid].episodes,
				url: data[cid].imageUrl
			}
			dispatch(endGetComicInfo(info))
		})
	}
}

function startGetComics() {
	return {
		type: '@COMICS/GET_START',
		loadingStatus: true
	}
}

function endGetComics(data) {
	return {
		type: '@COMICS/GET_END',
		loadingStatus: false,
		data: data
	}
}

function endGetComicInfo(info) {
	return {
		type: '@COMICS/GET_INFO_END',
		loadingStatus: false,
		info: info 
	}
}


//--------------------------------------------------------

//---------reducer----------------------------------------

const initInfo = {
	name: '',
	episodes: 0,
	url: ''
}

const init = {
	loadingStatus: false,
	info: initInfo
}

export function comics(state = init, action) {
	switch (action.type) {
		case '@COMICS/GET_START':
			return {
				data: {},
				info: init.info,
				loadingStatus: action.loadingStatus
			}
		case '@COMICS/GET_END':
			return {
				info: init.info,
				loadingStatus: action.loadingStatus,
				data: action.data
			}
		case '@COMICS/GET_INFO_END':
			return {
				loadingStatus: action.loadingStatus,
				info: action.info
			}
		default:
			return state
	}
}
