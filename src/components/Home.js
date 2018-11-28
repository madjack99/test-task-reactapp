import React, { Component } from 'react'
import {connect} from 'react-redux'
import { listOfSuperusers } from '../constants'

class Home extends Component {
	render() {
		console.log('signed up users =>', this.props.users) 
		console.log('active user =>', this.props.activeUser)
		console.log(this.props)
		return (
			<div>
				<h2>Home page</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptate!</p>
				{ listOfSuperusers.includes(this.props.activeUser.userName) ? (
					<div className="btn red">This button can be seen only by superusers</div>
				) : (null)}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return({
		users: state.auth.users,
		activeUser: state.auth.activeUser
	})
}

export default connect(mapStateToProps)(Home)