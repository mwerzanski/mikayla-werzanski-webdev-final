import React from 'react'
import {Link} from 'react-router-dom'
import NavbarComponent from '../NavbarComponent';
import { store } from '../../store';
import Axios from 'axios'
import { updateMenuItem } from '../../actions/menuAction';
import { readUser } from '../../actions/userAction';

export default class UpdateMenuItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            text: '',
            admin: store.getState().UserReducer.admin
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
        this.setState({
            title: store.getState().MenuReducer.title,
            text: store.getState().MenuReducer.text
        })
    }

    onChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    updateItem() {
        Axios.put(`http://localhost:3000/api/final/menuItems/${store.getState().MenuReducer.title}`, {
            title: this.state.title,
            text: this.state.text,
        }).then((response) => {
            store.dispatch(updateMenuItem('UPDATE_MENU_ITEM', response.data))
            return response.data
        }).catch( (error) => {
            this.setState({
                error: error
            })
        })
    }

    render() {
        if (this.state.admin) {
            return (
                <div className='text-center'>
                    <NavbarComponent/>
                    <h4 className='pt-4'>Update Menu Item:</h4>
                    <div>
                        <label for="title" className='mr-4'>Title:</label>
                        <input id="title" value={this.state.title} onChange={(e) => this.onChange('title', e)}></input>
                    </div>
                    <div className='pb-4'>
                        <label for="text" className='pt-3'>Description:</label>
                        <textarea className="form-control"  value={this.state.text} onChange={(e) => this.onChange('text', e)}></textarea>
                    </div>
                    <Link to={`/Menu/${store.getState().UserReducer._id}`} className='btn btn-outline-success' onClick={() => this.updateItem()}>Submit</Link>
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