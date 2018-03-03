import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {clickNotification,clickUser,clickPhoto} from 'state/post-handler.js'
import './header.sass'
import UserInfo from 'components/user-info.jsx'

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.clickNotification = this.clickNotification.bind(this)
		this.clickUser = this.clickUser.bind(this)
		this.unReads = true
		this.photoIsUnread = true
	}
	render() {
		//let content = (this.props.notifications.length === 0)?'目前沒有任何通知': this.props.notifications
		if (this.props.clicked) this.unReads = false
		let unReads = this.unReads?this.props.unReads: 0
		if (this.props.photoClicked) this.photoIsUnread = false
		let photoUnreads = this.photoIsUnread? this.props.photoUnreads: 0
		//console.log('photoUnreads: '+ photoUnreads + '-----------------------------------------------')
		return (
			<header className="header" style={this.props.userClicked?{transform: 'translate(calc(-330px),0px)'}:{transform: 'translate(0px,0px)'}}>
				<div className="content-container">
					<div className="photos-icon-container icon" onClick={()=>{this.props.dispatch(clickPhoto(this.props.photoClicked))}}>
						<img src="icons/camera.png" />
						<div className= {"new-photo"+ ((photoUnreads === 0)?" hidden":" display")}>
							{photoUnreads}
						</div>
					</div>
					<div className="notification-icon-container icon">
						<img src="icons/notification.png" className="notification-icon" 
							onClick={this.clickNotification}/>
						<div className={"new-notifications"+((this.props.clicked||unReads===0)?" hidden":" display")}>
							{unReads}
						</div>
					</div>
					<div className="notification-container" style={{'display': 'none'}}>
					</div>
					<div className="user-icon-container icon" onClick={this.clickUser}>
						<img src="icons/user.png"/>
					</div>
				</div>
				<UserInfo/>
			</header>
		)
	}
	clickNotification() {
		this.props.dispatch(clickNotification(this.props.clicked,this.props.userClicked))
	}
	clickUser() {
		this.props.dispatch(clickUser(this.props.clicked,this.props.userClicked))
	}
}

export default connect( state => (
		{
			clicked: state.notification.clicked,
			destinationAll: state.post.destinationAll,
			userClicked: state.notification.userClicked,
			unReads: state.newData.newNotifications,
			photoClicked: state.notification.photoClicked,
			photoUnreads: state.newData.newPosts,
		}
	))(Header)