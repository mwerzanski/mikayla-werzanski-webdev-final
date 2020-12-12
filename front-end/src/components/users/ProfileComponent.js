import React from 'react';
import {Link} from 'react-router-dom'

export default class ProfileComponent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: this.props.username, //update to pull from store
            firstname: this.props.firstName, //update to pull from store
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
            updateName: false,
            updateUsername: false,
        })
    }

    updateUsername() {
        this.setState({
            updateUsername: true,
            resetPassword: false,
            updateName: false
        })
    }

    updateFirstName() {
        this.setState({
            updateName: true,
            updateUsername: false,
            resetPassword: false,
        })
    }

    updateUser() {
        if (this.state.updateName) {
            //update name
        } else if (this.state.updateUsername) {
            //update username
        } else if (this.state.resetPassword) {
            //reset password
        }
    }

    render() {
        return (
            <div className="ml-4 mr-4">
                <h3>{this.state.firstname}'s Profile:</h3>
                <h5>Username: {this.state.username }</h5>
                <h6>Update your profile settings</h6>
                <br/>
                <div className="text-center fixed-bottom pb-4">
                    <Link to="#" className="btn btn-outline-primary mr-4" onClick={() => this.updateUsername()}>Update Username</Link>

                    <Link to="#" className="btn btn-outline-primary mr-4"  onClick={() => this.updateFirstName()}>Update Name</Link>

                    <Link to="#" className="btn btn-outline-primary"  onClick={() => this.resetPassword()}>Reset Password</Link>
                </div>

                {
                    this.state.updateUsername &&
                    <div>
                        <label for="username">Username:</label>
                        <input id="username" value={this.state.username} onChange={(e) => this.onChange('username', e)}></input>
                        <br/>
                        <Link to='/' className="btn btn-outline-danger" onClick={() => this.updateUser()}>Update</Link>
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
                        <br/>
                        <Link to='/' className="btn btn-outline-danger" onClick={() => this.updateUser()}>Update</Link>
                    </div>
                }
                {
                    this.state.updateName &&
                    <div>
                        <label for="firstName">First Name:</label>
                        <input id="firstName" value={this.state.firstName} onChange={(e) => this.onChange('firstName', e)}></input>
                        <br/>
                        <Link to='/' className="btn btn-outline-danger" onClick={() => this.updateUser()}>Update</Link>
                    </div>
                }
            </div>
        )
    }
}
