import React, { Component } from 'react'
import Sidenav from './Sidenav'
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

    getSidenav = () => {
        return (
            <ul className="my-sidenav">
                <li><a href="#" className="white-text">Home</a></li>
                <li><a href="#" className="white-text">About</a></li>
                <li><a href="#" className="white-text">Superuser</a></li>
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
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Superuser</a></li>
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
