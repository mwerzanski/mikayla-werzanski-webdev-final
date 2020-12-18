import React from 'react'
import {Link} from 'react-router-dom'
import {store} from '../../store'

export default class UserListCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">Username: {this.props.username}</p>
                        {
                            !this.props.admin &&
                            <Link to={`/ViewUsers/${store.getState().UserReducer._id}/ViewMenu/${this.props.username}`} className="btn btn-outline-success">View Menu</Link>
                        }
                        {
                            this.props.admin &&
                            <p>Admin user</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}