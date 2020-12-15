import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Axios from 'axios'
import NavbarComponent from '../NavbarComponent';

export default class CreateUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            duplicatePassword: '',
            firstName: '',
            redirect: '',
            admin: false,
            error: '',
        }
    }

    onChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    createUser() {
        if (this.state.password !== this.state.duplicatePassword) {
            this.setState({
                error: 'Please update password and confirm password to be the same.'
            })
        }
        Axios.post('http://localhost:3000/api/final/users', {
            firstName: this.state.firstName,
            username: this.state.username,
            password: this.state.password,
            admin: this.state.admin
        }).then(function(response) {
            return response.data
        }).catch(function(error) {
            this.setState({
                error: error
            })
        })
        if (this.state.error==='') {
            this.setState({
                redirect: "/login"
            })
        }
        
    }

    checkbox() {
        if(this.state.admin){
          this.setState({
            admin: false
          })
        } else {
          this.setState({
            admin: true
          })
        }
      }

    render() {
        if (this.state.redirect) {
            return(<Redirect to={this.state.redirect}></Redirect>)
        }
        return (
            <div>
                <NavbarComponent/>
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

                <div>
                    <input type="checkbox" className="form-check-input ml-2" onClick={() => this.checkbox()}/>
                    <label for="adminAccess" className="ml-4">Admin Access</label>
                </div>

                {
                    this.state.error !== '' &&
                    <div className="text-danger">{this.state.error}</div>
                }

                <Link to='/createUser' className="btn btn-success" onClick={() => this.createUser()}>Create Account</Link>
            </div>
            
        )
    }
}