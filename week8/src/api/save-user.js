


export function saveUserData(user,key='1234') {
	console.log('save items: '+ user.items.length)
	localStorage.setItem(key, JSON.stringify(user))
}

export function getUserData(key) {
	let data = localStorage.getItem(key)
	return data ? JSON.parse(data): null
}