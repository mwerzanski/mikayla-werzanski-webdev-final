import React from 'react';
import {Link} from 'react-router-dom'

export default class LoginComponent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    onChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    login() {
        
    }

    render() {
        return (
            <div>
                <h1>Login</h1>

                <div>
                    <label for="username">Username:</label>
                    <input id="username" value={this.state.username} onChange={(e) => this.onChange('username', e)}></input>
                </div>

                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" value={this.state.password} onChange={(e) => this.onChange('password', e)}></input>
                </div>

                <Link to='/' onClick={() => this.login()}>Login</Link>
            </div>
            
        )
    }
}