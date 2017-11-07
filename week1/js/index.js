

const colorList = [
			{
				color: 'white',
				style: {
					backgroundColor: 'rgb(255,255,255)',
					boxShadow: '1px 1px 2px gray'
				}
			},
			{
				color: 'black',
				style: {
					backgroundColor: 'rgb(0,0,0)',
					boxShadow: '1px 1px 2px gray'
				}
			},
			{
				color: 'red',
				style: {
					backgroundColor: 'rgb(255,2,2)',
					boxShadow: '1px 1px 2px gray'

				}
			},
			{
				color: 'orange',
				style: {
					backgroundColor: 'rgb(255,167,2)',
					boxShadow: '1px 1px 2px gray'
				}
			},
			{
				color: 'yellow',
				style: {
					backgroundColor: 'rgb(250,255,2)',
					boxShadow: '1px 1px 2px gray'
				}
			},
			{
				color: 'green',
				style: {
					backgroundColor: 'rgb(110,255,2)',
					boxShadow: '1px 1px 2px gray'
				}
			},
			{
				color: 'blue',
				style: {
					backgroundColor: 'rgb(2,219,255)',
					boxShadow: '1px 1px 2px gray'
				}
			},
			{
				color: 'purple_blue',
				style: {
					backgroundColor: 'rgb(2,67,255)',
					boxShadow: '1px 1px 2px gray'
				}
			},
			{
				color: 'purple',
				style: {
					backgroundColor: 'rgb(159,2,255)',
					boxShadow: '1px 1px 2px gray'
				}
			}
		]
pixelList = []
const width = 100
const height = 80
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
		imageWidth: width,
		imageHeight: height,
		colors: colorList,
		pixels: pixelList,
		nowColor: 'rgb(0,0,0)',
		mouseDown: false,
		colorDic: {
			'rgb(255,255,255)': [255,255,255],
			'rgb(0,0,0)': [0,0,0],
			'rgb(255,2,2)': [255,2,2],
			'rgb(255,167,2)': [255,167,2],
			'rgb(250,255,2)': [250,255,2],
			'rgb(110,255,2)': [110,255,2],
			'rgb(2,219,255)': [2,219,255],
			'rgb(2,67,255)': [2,67,255],
			'rgb(159,2,255)': [159,2,255]
		}
	},
	computed: {
		rgbValueForEachValue(){
			let pixelColor1DArray = new Array()
			for (let i = 0 ; i < this.imageHeight*this.imageWidth; i++){
				pixelColor1DArray.push('rgb(255,255,255)') 
			}
			return pixelColor1DArray
		}
	},
	methods: {
		paintColor(e,index){
			this.mouseDown = true
			e.style = {
				backgroundColor: this.nowColor
			}
			this.rgbValueForEachValue[index] = this.nowColor
		},

		keepDrawing(e,index){
			if(this.mouseDown) {
				e.style = {
					backgroundColor: this.nowColor
				}
				this.rgbValueForEachValue[index] = this.nowColor
			}
		},

		changeColor(e){
			this.colors = this.colors.map(p=>{
				p.style.border =`none`
				return p
			})
			this.nowColor = e.style.backgroundColor
			e.style.border = `2px solid ${this.nowColor}`
			e.style.boxShadow = `1px 1px 2px gray`
		},

		produceImage(){
			let buffer = new Uint8ClampedArray(this.imageHeight * this.imageWidth * 4)
			console.log(this.rgbValueForEachValue.length)
			for (let i = 0 ; i < this.rgbValueForEachValue.length ; i++){
				let pos = i * 4
				let colors = this.colorDic[this.rgbValueForEachValue[i]]
				//console.log(colors)
				//rgba value
				buffer[pos] = colors[0]
				buffer[pos+1] = colors[1]
				buffer[pos+2] = colors[2]
				buffer[pos+3] = 255

			}
			let canvas = document.createElement('canvas')
			ctx = canvas.getContext('2d')

			canvas.width = this.imageWidth
			canvas.height = this.imageHeight

			let idata = ctx.createImageData(canvas.width,canvas.height)
			idata.data.set(buffer)
			ctx.putImageData(idata,0,0)

			let dataUri = canvas.toDataURL()
			img = document.getElementById('image')
			img.src = dataUri
		}
	}
})

document.addEventListener("mouseup", ()=>{
    app.mouseDown = false
})