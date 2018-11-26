import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

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
        return (
            <div>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/superuser">Superuser</NavLink></li>
                <li><NavLink to="/signin">Sign in</NavLink></li>
                <li><NavLink to="/signup">Sign up</NavLink></li>
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

export default Navbar
