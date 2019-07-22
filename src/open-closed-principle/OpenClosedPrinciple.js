import React, { Component } from 'react'
import { Storage } from './services';

export class OpenClosedPrinciple extends Component {

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

            Storage.put('LoggedIn', true);

            console.log(Storage.all())

            Storage.engine('localStorage').put('LoggedInLS', true);

            console.log('LOGGED IN LS?', Storage.engine('localStorage').all())
        })
    }

    handleLogout = () => {
        this.setState({
            userIsLoggedIn: false
        }, () => {
            console.log('LOGGED IN?', this.state.userIsLoggedIn)

            Storage.put('LoggedIn', false);

            console.log(Storage.all())
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
                    ) : null
                }</p>

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

export default OpenClosedPrinciple
