import React from 'react';
import {Link} from 'react-router-dom'
import { store } from '../../store';
import NavbarComponent from '../NavbarComponent';
import Axios from 'axios'
import {readUser, clearUser} from '../../actions/userAction'

export default class ProfileComponent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: store.getState().UserReducer.username, //update to pull from store
            firstname: store.getState().UserReducer.firstName, //update to pull from store
            password: '',
            confirmPassword: '',
            resetPassword: false,
            updateUsername: false,
            updateName: false,
            error: ''
        }
    }

    componentDidMount() {
        Axios.get(`http://localhost:3000/api/final/users/${this.props.match.params.userID}`)
        .then((response) => {
            store.dispatch(readUser('READ_USER', response.data))
            this.setState({
                admin: response.data.admin
            })
        }).catch(function(error) {
            this.setState({
                error: error
            })
        })
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
        Axios.put(`http://localhost:3000/api/final/users/${this.props.match.params.userID}`, {
            username: this.state.username,
            firstName: this.state.firstname,
            password: this.state.password
        }).then((response) => {
            return response.data
        }).catch( (error) => {
            this.setState({
                error: error
            })
        })
    }

    logout() {
        store.dispatch(clearUser('CLEAR_USER_DATA'))
    }

    render() {
        if (store.getState().UserReducer.userActive) {
            return (
                <div className="ml-4 mr-4 pt-4">
                    <NavbarComponent/>
                    <div className='text-right'>
                        <Link to="/" className="btn btn-outline-danger" onClick={() => this.logout()}>Logout</Link>
                    </div>
                    <h3>{store.getState().UserReducer.firstName}'s Profile:</h3>
                    <h5>Username: {this.state.username }</h5>
                    <br/>
                    <div className="text-center fixed-bottom pb-4">
                        <h6>Update your profile settings</h6>

                        <Link to="#" className="btn btn-outline-primary mr-4" onClick={() => this.updateUsername()}>Update Username</Link>

                        <Link to="#" className="btn btn-outline-primary mr-4"  onClick={() => this.updateFirstName()}>Update Name</Link>
                    </div>

                    {
                        this.state.updateUsername &&
                        <div>
                            <label for="username">Username:</label>
                            <input id="username" value={this.state.username} onChange={(e) => this.onChange('username', e)}></input>
                            <br/>
                            <Link to='#' className="btn btn-outline-danger" onClick={() => this.updateUser()}>Update</Link>
                        </div>
                    }
                    {
                        this.state.updateName &&
                        <div>
                            <label for="firstName">First Name:</label>
                            <input id="firstName" value={this.state.firstName} onChange={(e) => this.onChange('firstName', e)}></input>
                            <br/>
                            <Link to='#' className="btn btn-outline-danger" onClick={() => this.updateUser()}>Update</Link>
                        </div>
                    }
                    {
                        this.state.error !== '' &&
                        <h4 className='text-danger'>There was an issue with your request. Please try again.</h4>
                    }
                </div>
            )
        } else {
            return (
                <div>
                    <NavbarComponent/>
                    <h3 className='text-danger text-center pt-4'>
                        This page is not accessible.
                    </h3>
                </div>
                
            )
        }
    }
}
