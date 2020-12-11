import React from 'react';
import {Link} from 'react-router-dom'

export default class ProfileComponent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: this.props.username,
            firstname: this.props.firstName,
            password: '',
            resetPassword: false,
            updateUsername: false,
            updateName: false,
        }
    }

    onChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    resetPassword() {
        this.setState({
            resetPassword: true,
        })
    }

    updateUsername() {
        this.setState({
            updateUsername: true,
        })
    }

    updateFirstName() {
        this.setState({
            updateName: true,
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.firstname} Profile:</h3>
                <h5>Username: {this.state.username }</h5>
                <h1>Update your profile settings</h1>
                <Link to="#" onClick={() => this.updateUsername()}>Update Username</Link>
                <Link to="#" onClick={() => this.updateFirstName()}>Update Name</Link>
                <Link to="#" onClick={() => this.resetPassword()}>Reset Password</Link>
                {
                    this.state.updateUsername &&
                    <div>
                        <label for="username">Username:</label>
                        <input id="username" value={this.state.username} onChange={(e) => this.onChange('username', e)}></input>
                    </div>
                }
                {
                    this.state.resetPassword &&
                    <div>
                        <label for="password">Password:</label>
                        <input type="password" id="password" value={this.state.password} onChange={(e) => this.onChange('password', e)}></input>
                        <br/>
                        <label for="duplicatePassword">Confirm Password:</label>
                        <input type="password" id="duplicatePassword" value={this.state.duplicatePassword} onChange={(e) => this.onChange('duplicatePassword', e)}></input>
                    </div>
                }
                {
                    this.state.updateName &&
                    <div>
                        <label for="firstName">First Name:</label>
                    <input id="firstName" value={this.state.firstName} onChange={(e) => this.onChange('firstName', e)}></input>
                    </div>
                }
            </div>
        )
    }
}
