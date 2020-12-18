import React from 'react';
import { Link } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import { store } from '../store';

export default class HomeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            userActive: store.getState().UserReducer.userActive,
        };
    }
    componentDidMount() {
        this.setState({
            activeUser: store.getState().UserReducer.userActive,
        });
        console.log('mount', store.getState().UserReducer.userActive);
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                {!this.state.userActive && (
                    <div className="text-right pt-4">
                        <Link to="/Login" className="btn btn-success mr-2">
                            Login
                        </Link>
                        <Link to="/CreateUser" className="btn btn-success">
                            Create New User
                        </Link>
                    </div>
                )}
                <div className="container card help-panel mt-3 pt-4">
                    <h3 className="text-center">Welcome to the Perfect Pear</h3>
                    <p>
                        I`m Kirsten Kilty, owner and chef of the Perfect Pear. I
                        am a personal chef and a caterer. As a personal chef, I
                        would come into your home weekly and prepare the menu we
                        have created together. You would be left with simple
                        instructions to reheat the groumet meals that have been
                        created.
                    </p>
                </div>
            </div>
        );
    }
}
