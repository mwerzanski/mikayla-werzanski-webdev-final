import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../store';
import Axios from 'axios'
import { readUser } from '../actions/userAction'

export default class NavbarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userActive: store.getState().UserReducer.userActive,
            userName: store.getState().UserReducer.username,
            admin: store.getState().UserReducer.admin
        }
    }

    componentDidMount() {
        this.setState({
            userActive: store.getState().UserReducer.userActive,
            userName: store.getState().UserReducer.username,
            admin: store.getState().UserReducer.admin
        })
    }

    render() {
        if (this.state.userActive) {
            return (
                <div className='pb-5'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <Link className="navbar-brand" to="/Home/:userID">Perfect Pear Chef</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={`/Home/${store.getState().UserReducer._id}`}>Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/Menu/${store.getState().UserReducer._id}`}>Weekly Menu<span className="sr-only">(current)</span></Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/ViewNutritionInformation/${store.getState().UserReducer._id}`}>Search Nutrition Information</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/Help/${store.getState().UserReducer._id}`}>Help</Link>
                            </li>
                            {
                                this.state.admin &&
                                <li className="nav-item">
                                    <Link className="nav-link" to={`/ViewUsers/${store.getState().UserReducer._id}`}>View Users</Link>
                                </li>
                            }
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={`/UserProfile/${store.getState().UserReducer._id}`}>{store.getState().UserReducer.username }</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                </div>
            )
        } else {
            return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Perfect Pear Chef</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ViewNutritionInformation">Search Nutrition Information</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Help">Help</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }
}