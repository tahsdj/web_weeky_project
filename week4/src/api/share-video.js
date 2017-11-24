import uuid from 'uuid/v4';
import moment from 'moment';
import 'babel-polyfill';
import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDOCArDfVM_NZ0gZCuzd9Hv4deGBSrC3Ik",
    authDomain: "test-bb191.firebaseapp.com",
    databaseURL: "https://test-bb191.firebaseio.com",
    projectId: "test-bb191",
    storageBucket: "test-bb191.appspot.com",
    messagingSenderId: "677123200660"
  };
  firebase.initializeApp(config);


const videoRef = firebase.database().ref('/videos')


export function listShareVideos(){
	return new Promise((resolve,reject)=>{
		videoRef.once('value').then(data=>{
			let videos = new Array()
			data.forEach(d=>{
				videos.push(d.val())
			})
			resolve(videos)
		})
	})
}
export function onShareVideos(method){
	return videoRef.on('child_added',data=>{
		let content = data.val()
		method(content)
	})
}

export function shareVideoToOthers(v){
	return new Promise((resolve,reject)=>{
		v['time'] = moment().unix()
		videoRef.push(v).then(()=>{
			resolve(v)
		})
	})
}