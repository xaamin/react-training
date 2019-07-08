import React, { Component } from 'react'

export class UserLoginStatus extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userIsLoggedIn: false
        }
    }

    handleLogin = () => {
        this.setState({
            userIsLoggedIn: true
        }, () => {
            console.log('LOGGED IN?', this.state.userIsLoggedIn)
        })
    }

    handleLogout = () => {
        this.setState({
            userIsLoggedIn: false
        }, () => {
            console.log('LOGGED IN?', this.state.userIsLoggedIn)
        })
    }

    render() {
        const { userIsLoggedIn } = this.state;

        return (
            <div>
                <p>{ userIsLoggedIn
                    ? (
                        <span>
                            <span>Benjamín Martínez ...</span>
                            <br />
                            <span>Admin</span>
                        </span>
                    ) : 'Guest user'
                }</p>

                <p>{ userIsLoggedIn && 'Logged In' }</p>

                <p>{ !userIsLoggedIn && 'Guest user' }</p>

                <button onClick={ this.handleLogin  }>
                    Login
                </button>

                <button onClick={ this.handleLogout }>
                    Logout
                </button>
            </div>
        )
    }
}

export default UserLoginStatus
