const colorList = [
			{
				color: 'white',
				style: {
					backgroundColor: '#ffffff',
					border: '1px solid gray'
				}
			},
			{
				color: 'black',
				style: {
					backgroundColor: '#000000',
					border: '1px solid gray'
				}
			},
			{
				color: 'blue',
				style: {
					backgroundColor: '#f80000',
					border: '1px solid gray'
				}
			},
			{
				color: 'yello',
				style: {
					backgroundColor: '#ffeb3b',
					border: '1px solid gray'
				}
			},
			{
				color: 'green',
				style: {
					backgroundColor: '#4CAF4F',
					border: '1px solid gray'
				}
			}
		]
pixelList = []
const width = 50
const height = 40
for(let i = 0 ; i < width*height ; i++){
	pixelList.push({
		style: {
			backgroundColor: 'white'
		}
	})
}

const app = new Vue({
	el: '#app',
	data: {
		colors: colorList,
		pixels: pixelList,
		nowColor: 'black',
		mouseDown: false
	},
	methods: {
		paintColor(e){
			this.mouseDown = true
			
			e.style = {
				backgroundColor: this.nowColor
			}

		},

		keepDrawing(e){
			if(this.mouseDown) {
				e.style = {
					backgroundColor: this.nowColor
				}
			}
		},

		changeColor(e){
			this.colors = this.colors.map(p=>{
				p.style.border ="1px solid gray"
				return p
			})
			this.nowColor = e.style.backgroundColor
			e.style.border = "1px solid red"
		}
	}
})

document.addEventListener("mouseup", ()=>{
    app.mouseDown = false
	console.log('stop')
})