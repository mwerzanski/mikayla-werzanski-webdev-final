import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

export default class MenuItemCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedMenuItem : false
        }
    }

    selectItem() {
        //TODO: add item to their list
        this.setState({
            selectedMenuItem: true
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
                            !this.state.selectedMenuItem && 
                            <a href="#" className="btn btn-success" onClick={() => this.selectItem()}>Select</a>
                        }
                        {
                            this.state.selectedMenuItem &&
                            <a href="#" className="btn btn-success disabled" onClick={() => this.selectItem()}>Select</a>
                        }
                    </div>
                </div>
            </div>
        )
    }
}