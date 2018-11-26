import React, { Component } from 'react'
import {connect} from 'react-redux'

class Home extends Component {
	render() {
		console.log(this.props.users)
		return (
			<div>
				<h2>Home page</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptate!</p>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return({
		users: state.auth.users
	})
}

export default connect(mapStateToProps)(Home)