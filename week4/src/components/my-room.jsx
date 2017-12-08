import React from 'react'
import ReactDOM from 'react-dom'
import './my-room.sass'

export default class MyRoom extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let album = []
		for ( let i = 0 ; i < 4 ; i++ ) {
			let tmp = (<div key={`${i}`} className="album">
							<div className="image-container">
							<img src={`img/album/${i}.jpg`}/>
								<div className="label-container">
									<div className="songs label">
										<img src="img/video-list.png"/>
									</div>
									<div className="cherish label">
										<img src="img/star.png"/>
									</div>
								</div>
							</div>
						</div>)
			album = [...album,tmp]
		}
		return (
			<div className="my-board">
				<div className="my-board-container">
					{album}
				</div>
			</div>
		)
	}
}