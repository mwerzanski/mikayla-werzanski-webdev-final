import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../store';

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
                                <Link className="nav-link" to="/menu">Weekly Menu<span className="sr-only">(current)</span></Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Help">Help</Link>
                            </li>
                            {
                                this.state.admin &&
                                <li className="nav-item">
                                    <Link className="nav-link" to="/viewUsers">View Users</Link>
                                </li>
                            }
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/userProfile">{store.getState().UserReducer.username }</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
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
                                <Link className="nav-link" to="/Help">Help</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }
}