import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './navbar.css'
import { logOut } from '../store/actions/authActions'

class Navbar extends Component {

    state = {
        isOpen: false
    }

    handleClick = (e) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getLinks = () => {
        const signedInLinks = [
            <li><NavLink to="/" onClick={this.handleClick}>Home</NavLink></li>,
            <li><NavLink to="/about" onClick={this.handleClick}>About</NavLink></li>,
            <li><NavLink to="/superuser" onClick={this.handleClick}>Superuser</NavLink></li>,
            <li><Link to="/" onClick={this.props.logOut}>Log Out</Link></li>
        ]

        const signedOutLinks = [
            <li><NavLink to="/signin" onClick={this.handleClick}>Sign in</NavLink></li>,
            <li><NavLink to="/signup" onClick={this.handleClick}>Sign up</NavLink></li>
        ]
        return (
            <div>
                { this.props.activeUser ? signedInLinks : signedOutLinks }
            </div>
        )
    }

    getSidenav = () => {
        return (
            <ul className="my-sidenav">
                {this.getLinks()}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper indigo">
                        <ul className="hide-on-large-only">
                            <li><a href="#" onClick={this.handleClick}><i className="material-icons">menu</i></a></li>
                        </ul>
                        <ul className="hide-on-med-and-down right">
                            {this.getLinks()}
                        </ul>
                    </div>
                </nav>
                <div className="row hide-on-large-only">
                    <div className="col s3 indigo">
                        {this.state.isOpen ? this.getSidenav() : null}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        activeUser: state.auth.activeUser
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        logOut: () => dispatch(logOut())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
