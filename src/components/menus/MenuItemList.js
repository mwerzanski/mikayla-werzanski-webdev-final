/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import MenuItemCard from './MenuItemCard';
import NavbarComponent from '../NavbarComponent';
import { store } from '../../store';
import Axios from 'axios';
import { setMenuItems } from '../../actions/menuAction';
import { readUser } from '../../actions/userAction';

export default class MenuComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: store.getState().MenuReducer.menuItems,
            admin: store.getState().UserReducer.admin,
        };
    }

    componentDidMount() {
        Axios.get(
            `https://mwerzanski-webdev-final-backnd.herokuapp.com/api/final/users/${this.props.match.params.userID}`
        )
            .then(response => {
                store.dispatch(readUser('READ_USER', response.data));
                this.setState({
                    admin: response.data.admin,
                });
            })
            .catch(function (error) {
                this.setState({
                    error: error,
                });
            });
        Axios.get(`https://mwerzanski-webdev-final-backnd.herokuapp.com/api/final/menuItems/`)
            .then(response => {
                store.dispatch(setMenuItems('SET_MENU_ITEMS', response.data));
                this.setState({
                    menuItems: response.data,
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                });
            });
    }

    submit() {
        console.log('menu reducer', store.getState().MenuReducer.titles);
        Axios.post('https://mwerzanski-webdev-final-backnd.herokuapp.com/api/final/menus/', {
            username: store.getState().UserReducer.username,
            menuItem: store.getState().MenuReducer.titles,
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                Axios.put(
                    `https://mwerzanski-webdev-final-backnd.herokuapp.com/api/final/menus/${
                        store.getState().UserReducer.username
                    }`,
                    {
                        username: store.getState().UserReducer.username,
                        menuItem: store.getState().MenuReducer.titles,
                    }
                )
                    .then(response => {
                        return response.data;
                    })
                    .catch(error => {
                        this.setState({
                            error: error,
                        });
                    });
            });
    }

    render() {
        if (store.getState().UserReducer.userActive) {
            return (
                <div>
                    <NavbarComponent />
                    <h3 className="ml-4 pt-4">Available Menu Options:</h3>
                    {store.getState().UserReducer.admin && (
                        <Link
                            to={`/CreateMenuItem/${
                                store.getState().UserReducer._id
                            }`}
                            className="btn btn-outline-success">
                            Add Menu Item
                        </Link>
                    )}
                    {this.state.menuItems.length > 0 && (
                        <div>
                            {this.state.menuItems.map((menuItem, index) => (
                                <div className="card col-12 mb-2" key={index}>
                                    <MenuItemCard
                                        title={menuItem.title}
                                        text={menuItem.text}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                    {this.state.menuItems.length === 0 && (
                        <h4 className="text-center text-primary pt-4 pb-4">
                            There are currently no menu items listed, please
                            check back later.
                        </h4>
                    )}
                    {!store.getState().UserReducer.admin && (
                        <Link
                            className="btn btn-outline-primary"
                            to={`/Menu/${store.getState().UserReducer._id}`}
                            onClick={() => this.submit()}>
                            Submit Menu Selections
                        </Link>
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
