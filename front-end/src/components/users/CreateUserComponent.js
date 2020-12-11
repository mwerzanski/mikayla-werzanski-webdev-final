import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Axios from 'axios'

export default class CreateUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            duplicatePassword: '',
            firstName: '',
            redirect: '',
        }
    }

    onChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    createUser() {
        if (this.state.password !== this.state.duplicatePassword) {
            //add error message
        }
        Axios.post('localhost:3000/api/user').then(function(response) {
            return response.data
        }).catch(function(error) {
            //handle error
        })
    }

    render() {
        if (this.state.redirect) {
            return(<Redirect to={this.state.redirect}></Redirect>)
        }
        return (
            <div>
                <h1>Create New User</h1>

                <div>
                    <label for="firstName">First Name:</label>
                    <input id="firstName" value={this.state.firstName} onChange={(e) => this.onChange('firstName', e)}></input>
                </div>

                <div>
                    <label for="username">Username:</label>
                    <input id="username" value={this.state.username} onChange={(e) => this.onChange('username', e)}></input>
                </div>

                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" value={this.state.password} onChange={(e) => this.onChange('password', e)}></input>
                </div>

                <div>
                    <label for="duplicatePassword">Confirm Password:</label>
                    <input type="password" id="duplicatePassword" value={this.state.duplicatePassword} onChange={(e) => this.onChange('duplicatePassword', e)}></input>
                </div>

                <Link to='/' onClick={() => this.createUser()}>Create Account</Link>
            </div>
            
        )
    }
}