import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import { store } from '../../store';
import { readUser } from '../../actions/userAction';
import NavbarComponent from '../NavbarComponent';

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
            redirect: '',
        };
    }

    onChange(key, event) {
        this.setState({
            [key]: event.target.value,
        });
    }

    login() {
        Axios.get(
            `http://localhost:3000/api/final/users/${this.state.username}/${this.state.password}`
        )
            .then(function (response) {
                console.log('login', response.data);
                store.dispatch(readUser('READ_USER', response.data));
            })
            .catch(error => {
                this.setState({
                    error: error,
                });
            })
            .then(() => {
                if (this.state.error === '') {
                    this.setState({
                        redirect: `/Menu/${store.getState().UserReducer._id}`,
                    });
                }
            });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}></Redirect>;
        }
        return (
            <div className="text-center">
                <NavbarComponent />
                <h2>Login</h2>

                <div>
                    <label htmlFor="username" className="mr-4">
                        Username:
                    </label>
                    <input
                        id="username"
                        value={this.state.username}
                        onChange={e => this.onChange('username', e)}></input>
                </div>

                <div>
                    <label htmlFor="password" className="mr-4">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={this.state.password}
                        onChange={e => this.onChange('password', e)}></input>
                </div>
                {this.state.error !== '' && (
                    <h4 className="text-danger text-center pt-4">
                        Username or password is incorrect. Please try again.
                    </h4>
                )}

                <Link
                    to="/Login"
                    className="btn btn-outline-success"
                    onClick={() => this.login()}>
                    Login
                </Link>
            </div>
        );
    }
}
