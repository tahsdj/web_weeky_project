


let component1; 

const app = new Vue({
	el: '#app',
	data: {
		context: document.getElementById('canvas').getContext('2d'),
		player:{
			name: '',
			points: 0,
			rank: 0,
			death: false
		},
		playerList: []
	},
	computed: {

	},
	methods: {
		start(){
			let c = component(100,100,'white',20,20)
		},
		join(){
			if(this.player.name){
				this.playerList.push({
					name: this.player.name,
					points: this.player.points
				})
				player = new Component(10,'green',50,500)
				player.fill()
			}
		}
	},
	mounted: function(){
	}
})


/*
function component(w,h,color,x,y){
	this.width = w
	this.height = h
	this.speedX = 0
	this.speedY = 0
	this.x = x
	this.y = y
	this.update= function(){
		ctx = app.context
		ctx.fillStyle = color
		ctx.fillRect(this.x,this.y,this.width,this.height)
	}
	this.newPos = function(){
		this.x += this.speedX
		this.y += this.speedY
	}
}
*/

class GameArea{
	constructor(w,h,color,x,y){
		this.el = document.getElementById('canvas')
		this.ctx = this.el.getContext('2d')
		this.width = w
		this.height = h
		this.backgrounColor = color
		this.postion = {
			x: x,
			y: y
		}
		this.t
	}
	start(){
		this.t = setInterval(updateArea, 20)
	}
	clear(){
		this.ctx.clearRect(0,0,this.width,this.height)
	}
	stopInterval(){
		clearInterval(this.t)
	}
}


class Component{
	constructor(r,color,x,y){
		this.el = document.getElementById('canvas')
		this.ctx = this.el.getContext('2d')
		this.radius = r
		this.speedX = 0
		this.speedY = 0
		this.color = color
		this.x = x
		this.y = y
	}
	fill(){
		let ctx = this.ctx
		ctx.fillStyle = this.color
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
		//ctx.fillRect(this.x,this.y,this.width,this.height)
		ctx.fill()
	}
	newPos(){
		this.x += this.speedX
		this.y += this.speedY
		this.fill()
	}
	crashWith(obj){
		let x = this.x + this.speedX
		let y = this.y + this.speedY
		let myLeft = x - this.radius
		let myRight = x + this.radius
		let myTop = y - this.radius
		let myBottom = y + this.radius
		let objLeft = [], objTop = [], objRight = [], objBottom = []
		let crash = 0
		for (let i = 0 ; i < obj.length ; i++){
			objLeft.push(obj[i].x - obj[i].radius)
			objRight.push(obj[i].x + obj[i].radius)
			objTop.push(obj[i].y - obj[i].radius)
			objBottom.push(obj[i].y + obj[i].radius)
			if (    myLeft > objRight[i] ||
					myRight < objLeft[i] ||
					myTop > objBottom[i] ||
					myBottom < objTop[i]
				){
			}else{
				crash++
				break
			}
		}
		return crash>0?true:false
	}
	clear(){
		this.ctx.clearRect(this.x-this.radius,this.y-this.radius,2*this.radius,2*this.radius)
	}
	move(){
		this.clear()
		this.newPos()
	}
}

class Monster{
	constructor(r,color,x,y){
		this.el = document.getElementById('canvas')
		this.ctx = this.el.getContext('2d')
		this.radius = r
		this.speedX = 5
		this.speedY = 2
		this.color = color
		this.x = x
		this.y = y
		this.swtich = ''
	}
	fill(){
		let ctx = this.ctx
		ctx.fillStyle = this.color
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
		//ctx.fillRect(this.x,this.y,this.width,this.height)
		ctx.fill()
	}
	newPos(){
		if(this.x + this.radius >= 1000 || this.x - this.radius <= 0) this.speedX = -this.speedX
		if(this.y + this.radius >= 600 || this.y - this.radius <= 0) this.speedY = -this.speedY
		this.x += this.speedX
		this.y += this.speedY
		this.fill()
	}
	autoMove(){
		this.clear()
		this.newPos()
	}
	clear(){
		this.ctx.clearRect(this.x-this.radius,this.y-this.radius,2*this.radius,2*this.radius)
	}
	dead(){
		clearInterval(this.swtich)
	}
	start(){
		this.swtich = setInterval(monsterMove(this),30)
	}
}

class Obstacle{
	constructor(w,h,color,x,y){
		this.el = document.getElementById('canvas')
		this.ctx = this.el.getContext('2d')
		this.width = w
		this.height = h
		this.color = color
		this.x = x
		this.y = y
	}
	fill(){
		let ctx = this.ctx
		ctx.fillStyle = this.color
		ctx.fillRect(this.x,this.y,this.width,this.height)
	}
}

class Point{
	constructor(r,color,x,y){
		this.el = document.getElementById('canvas')
		this.ctx = this.el.getContext('2d')
		this.radius = r
		this.color = color
		this.x = x
		this.y = y
		this.swtich = ''
	}
	fill(){
		let ctx = this.ctx
		ctx.fillStyle = this.color
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
		//ctx.fillRect(this.x,this.y,this.width,this.height)
		ctx.fill()
	}
	clear(){
		this.ctx.clearRect(this.x-this.radius,this.y-this.radius,2*this.radius,2*this.radius)
	}
	getPoint(obj){
		let x = this.x 
		let y = this.y 
		let myLeft = x - this.radius
		let myRight = x + this.radius
		let myTop = y - this.radius
		let myBottom = y + this.radius
		//let objLeft = [], objTop = [], objRight = [], objBottom = []
		let crash = 0
		let objLeft = (obj.x - obj.radius)
		let objRight = (obj.x + obj.radius)
		let objTop = (obj.y - obj.radius)
		let objBottom = (obj.y + obj.radius)
		if (    myLeft > objRight ||
				myRight < objLeft ||
				myTop > objBottom ||
				myBottom < objTop
			){
		}else{
			crash++
			this.x = Math.floor((Math.random() * 990) + 10)
			this.y = Math.floor((Math.random() * 500) + 10)
		}
		return crash>0?true:false
	}
}

let test = new Component(50,50,'black',50,50)

let game = new GameArea(1000,600,'gray',0,0)
let player,obstacle,monster,monster1
let num_of_obstacles = 10
let obstacles = [], monsters = [], points = []
obstacles[0] = new Obstacle(100,60,'white',600,400)
obstacles[1] = new Obstacle(50,180,'white',100,200)
monsters[0] = new Monster(10,'red',20,20)
monsters[1] = new Monster(40,'blue',50,50)
monsters[2] = new Monster(30,'black',100,200)
monsters[3] = new Monster(20,'yellow',800,30)

for (let i = 0 ; i < 20 ; i++){
	let x = Math.floor((Math.random() * 990) + 10)
	let y = Math.floor((Math.random() * 500) + 10) 
	points.push(new Point(5,'gold',x,y))
}
function gameInit(){
	//player = new Component(10,'green',50,500)
	console.log('hi')
	game.start()
	//player.fill()
	for (let i = 0 ; i < obstacles.length ; i++) obstacles[i].fill()
	for (let i = 0 ; i < points.length ; i++) points[i].fill()
	for (let i = 0 ; i < monsters.length ; i++) {
		monsters[i].fill()
		//monsters[i].start()
	}

}

function monsterMove(e){
	e.autoMove()
}

function updateArea(){
	game.clear()
	for (let i = 0 ; i < obstacles.length ; i++) obstacles[i].fill()
	for (let i = 0 ; i < points.length ; i++) points[i].fill()
	if(player){
		if(player.crashWith(monsters)) {
			console.log('stop')
			player.color = 'gray'
			game.stopInterval()
		}
		for(let i = 0 ; i < points.length ; i++){
			if(points[i].getPoint(player)) {
				app.playerList[0].points += 1
				player.radius += 1
			}
		}
		player.fill()
		player.newPos()
	}
	for (let i = 0 ; i < monsters.length ; i++) {
		monsters[i].fill()
		monsters[i].newPos()
	}
}


function move(e) {
	if(player){
		let key = e.keyCode
		player.speed = 5
		if(key === 39) player.speedX = 5
		if(key === 37) player.speedX = -5
		if(key === 38) player.speedY = -5
		if(key === 40) player.speedY = 5
		player.move()
	}
	/*
	if (!player.crashWith(obstacles)){
		player.move()
	}else{
		stop()
	}*/
}

function stop(e) {
	if(player){
		player.speedX = 0
		player.speedY = 0
	}
}
window.addEventListener('keydown',move)
window.addEventListener('keyup',stop)

