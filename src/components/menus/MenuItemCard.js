import React from 'react'
import {store} from '../../store'
import {deleteMenuItem, updateMenuItem, addItemToUserList} from '../../actions/menuAction'
import Axios from 'axios'
import {Link} from 'react-router-dom'

export default class MenuItemCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedMenuItem : false
        }
    }

    selectItem() {
        store.dispatch(addItemToUserList('ADD_ITEM_USERLIST', this.props.title))
        this.setState({
            selectedMenuItem: true
        })
    }

    deleteItem() {
        Axios.delete(`http://localhost:3000/api/final/menuItems/`, { data: {
            title: this.props.title,
            text: this.props.text,
        }}).then((response) => {
            store.dispatch(deleteMenuItem('DELETE_MENU_ITEM', response.data))
            return response.data
        }).catch( (error) => {
            this.setState({
                error: error
            })
        })
    }

    updateItem() {
        console.log('update', this.props.title)
        store.dispatch(updateMenuItem('UPDATE_MENU_ITEM', this.props.title, this.props.text))
    }

    removeItem() {
        store.dispatch(addItemToUserList('REMOVE_ITEM_USERLIST', this.props.title))
        this.setState({
            selectedMenuItem: false
        })
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.text}</p>
                        {
                            !store.getState().UserReducer.admin &&
                            <div>
                                {
                                    !this.state.selectedMenuItem && 
                                    <button className="btn btn-success" onClick={() => this.selectItem()}>Select</button>
                                }
                                {
                                    this.state.selectedMenuItem &&
                                    <button className="btn btn-danger" onClick={() => this.removeItem()}>Remove</button>
                                }
                            </div>
                        }
                        {
                            store.getState().UserReducer.admin &&
                            <div>
                                <button className="btn btn-outline-danger" onClick={() => {this.deleteItem(); window.location.reload() }}>Delete</button>
                                <Link to={`/UpdateMenuItem/${store.getState().UserReducer._id}`} className="btn btn-outline-success" onClick={() => this.updateItem()}>Update Item</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}