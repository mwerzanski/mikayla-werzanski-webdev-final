/* eslint-disable react/prop-types */
import React from 'react';
//import {Link} from 'react-router-dom'
import UserListCard from './UserListCard';
import NavbarComponent from '../NavbarComponent';
import Axios from 'axios';
import { store } from '../../store';
import { userList, readUser } from '../../actions/userAction';

export default class AdminUserComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error: '',
        };
    }

    componentDidMount() {
        Axios.get(
            `http://localhost:3000/api/final/users/${this.props.match.params.userID}`
        )
            .then(response => {
                store.dispatch(readUser('READ_USER', response.data));
                this.setState({
                    admin: response.data.admin,
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                });
            });
        Axios.get(`http://localhost:3000/api/final/users`)
            .then(response => {
                store.dispatch(userList('USER_LIST', response.data));
                this.setState({
                    users: response.data,
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                });
            });
    }

    render() {
        if (store.getState().UserReducer.admin) {
            return (
                <div>
                    <NavbarComponent />
                    <h3 className="pt-4">Perfect Pear Chef Users:</h3>
                    {store.getState().UserReducer.userList.length > 0 && (
                        <div>
                            {store
                                .getState()
                                .UserReducer.userList.map((user, index) => (
                                    <div
                                        className="card col-12 mb-2"
                                        key={index}>
                                        <UserListCard
                                            username={user.username}
                                            name={user.firstName}
                                            admin={user.admin}
                                        />
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            );
        } else {
            return (
                <div>
                    <NavbarComponent />
                    <h3 className="text-danger text-center pt-4">
                        This page is not accessible.
                    </h3>
                </div>
            );
        }
    }
}
