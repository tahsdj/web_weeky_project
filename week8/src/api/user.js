
let user = {
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
		return (this.level*500 - 100)
	},
	items: []
}

export default function getPlayerData() {
	return user
}