import React, { Component } from 'react'
import { signIn } from '../store/actions/authActions'
import { connect } from 'react-redux'

export class SignIn extends Component {

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
		this.props.signIn(this.state)
        setTimeout(() => {
            this.props.signInError ? (
                this.props.history.push("/signin")
            ) : (
                this.props.history.push('/')
            )
        }, 1000)
	}

	render() {
        console.log("Sign in error", this.props.signInError)
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<h3>Sign In</h3>
					<div className="input-field">
						<label htmlFor="userName">You name</label>
						<input type="text" id="userName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">password</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn indigo">Sign In</button>
					</div>
				</form>
                { this.props.signInError ? (
                    <div className="red-text">{this.props.signInError}</div>
                ) : null }
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return ({
		signIn: (user) => dispatch(signIn(user))
	})
}

const mapStateToProps = (state) => {
    return ({
        signInError: state.auth.signInError
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
