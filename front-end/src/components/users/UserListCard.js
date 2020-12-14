import React from 'react'
//import {Link} from 'react-router-dom'
//import PropTypes from 'prop-types';

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
                        <p className="card-text">{this.props.username}</p>
                        <button className="btn btn-outline-success">View Menu</button>
                    </div>
                </div>
            </div>
        )
    }
}