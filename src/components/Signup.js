import React, { Component } from 'react'

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

	render() {
		console.log(this.state)
		return (
			<div className="container">
				<form onSubmit={this.handleSubmin}>
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

export default Signup
