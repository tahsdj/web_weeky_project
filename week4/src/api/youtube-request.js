import searchYouTube from 'youtube-api-search'


const API_KEY = 'AIzaSyBG55O4on3iYR5O197diBsna1g0eNE4YB8'

export function getSearchVideos(searchText){
		return new Promise((resolve, reject)=>{
			 searchYouTube({key: API_KEY, term: searchText, maxResults: 6}, (videos) => {
	            resolve(videos)
	        })
		})
}

export function sayHello(){
	console.log('hello')
}