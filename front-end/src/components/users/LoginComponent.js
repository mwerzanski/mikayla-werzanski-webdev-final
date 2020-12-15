import React from 'react';
import {Link, Redirect} from 'react-router-dom'
import Axios from 'axios'
import {store} from '../../store'
import {readUser} from '../../actions/userAction'
import NavbarComponent from '../NavbarComponent';

export default class LoginComponent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            error: '',
            redirect: ''
        }
    }

    onChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    login() {
        Axios.get(`http://localhost:3000/api/final/users/${this.state.username}/${this.state.password}`)
        .then(function(response) {
            store.dispatch(readUser('READ_USER', response.data))
            console.log('login username', store.getState().UserReducer.username)
            return response.data
        }).catch(function(error) {
            this.setState({
                error: error
            })
        })
        if (this.state.error==='') {
            this.setState({
                redirect: "/menu"
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
                <h1>Login</h1>

                <div>
                    <label for="username">Username:</label>
                    <input id="username" value={this.state.username} onChange={(e) => this.onChange('username', e)}></input>
                </div>

                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" value={this.state.password} onChange={(e) => this.onChange('password', e)}></input>
                </div>

                <Link to='/login' onClick={() => this.login()}>Login</Link>
            </div>
            
        )
    }
}