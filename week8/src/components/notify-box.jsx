import React from 'react'
import ReactDOM from 'react-dom'
import './notify-box.sass'
import {connect} from 'react-redux'
import {clickNotification, loadMore} from 'state/post-handler.js'

class NotifyBox extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		let content = (this.props.notifications.length === 0)?'目前沒有任何通知': this.props.notifications
		//if ( content.length > 5 ) content = content.reverse().splice(-5,5)
		if ( content !== '目前沒有任何通知' ) {
				if ( content.length > this.props.maxDisplay ) content = content.filter( (c,i) => i < this.props.maxDisplay )
				if ( content.length < this.props.notifications.length ) {
					let readMore = (
						<div className="read-more-container">
							<span onClick={()=>this.props.dispatch(loadMore(this.props.maxDisplay))} style={{cursor: 'pointer'}}>更多</span>
						</div>
					)
				content = [...content, readMore]
			}
		}
		return (
			<div className={'notification-container'+ (this.props.clicked?' display':' hidden')}>
				<div className="btn close">
					<img src="icons/close.png" onClick={()=>this.props.dispatch(clickNotification(this.props.clicked,this.props.userClicked))}/>
				</div>
				{content}
			</div>
		)
	}
}

export default connect( state => (
		{
			clicked: state.notification.clicked,
			userClicked: state.notification.userClicked,
			maxDisplay: state.notification.maxDisplay
		}
	))(NotifyBox)