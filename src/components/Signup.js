import React, { Component } from 'react'
import { signUp } from '../store/actions/authActions'
import { connect } from 'react-redux'

export class Signup extends Component {

	state = {
		userName: '',
		password: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.signUp(this.state)
		this.props.history.push('/')
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<h3>Sign up</h3>
					<div className="input-field">
						<label htmlFor="userName">You name</label>
						<input type="text" id="userName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">password</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn indigo">Sign up</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return ({
		signUp: (user) => dispatch(signUp(user))
	})
}

export default connect(null, mapDispatchToProps)(Signup)
