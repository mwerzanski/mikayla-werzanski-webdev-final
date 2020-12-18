import React from 'react'
import {Link} from 'react-router-dom'
import NavbarComponent from '../NavbarComponent';
import { store } from '../../store';
import Axios from 'axios'
import { setMenuItems, addMenuItem } from '../../actions/menuAction';
import { readUser } from '../../actions/userAction'
import AdminMenuCard from './AdminMenuCard';

export default class AdminMenuComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItems: [],
            admin: store.getState().UserReducer.admin,
            username: this.props.match.params.username
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
        Axios.get(`http://localhost:3000/api/final/menus/thomas`)
        .then((response) => {
            this.setState({
                username: response.data.username,
                menuItems: response.data.menuItem
            })
        }).catch(function(error) {
            this.setState({
                error: error
            })
        })
    }

    render() {
        if (store.getState().UserReducer.userActive) {
            return (
                <div>
                    <NavbarComponent/>
                    <h3 className='ml-4 pt-4'>{this.state.username} Menu Choices:</h3>
                    {
                        store.getState().UserReducer.admin &&
                        <Link to={`/CreateMenuItem/${store.getState().UserReducer._id}`} className="btn btn-outline-success">Add Menu Item</Link>
                    }
                    {
                        this.state.menuItems.length > 0 && 
                        <div>
                            {
                                this.state.menuItems.map((menuItem, index) =>
                                <div className='card col-12 mb-2' key={index}>
                                    <AdminMenuCard title={menuItem} text={''}/>
                                </div>)
                            }
                        </div>
                    }
                    {
                        this.state.menuItems.length === 0 && 
                        <h4 className='text-center text-primary pt-4 pb-4'>There are currently no menu items listed, please check back later.</h4>
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