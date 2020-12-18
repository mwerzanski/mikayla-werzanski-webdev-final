/* eslint-disable react/prop-types */
import React from 'react';
import NavbarComponent from './NavbarComponent';
import { store } from '../store';
import Axios from 'axios';
import { readUser } from '../actions/userAction';

export default class HelpComponent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        Axios.get(
            `http://localhost:3000/api/final/users/${this.props.match.params.userID}`
        )
            .then(response => {
                store.dispatch(readUser('READ_USER', response.data));
            })
            .catch(error => {
                this.setState({
                    error: error,
                });
            });
    }
    render() {
        return (
            <div>
                <NavbarComponent />
                <h3 className="pt-4">Help Information</h3>
                <ul>
                    <li>
                        Search Nutrition allows you to search for the calorie
                        totals and fat totals of any foods I make for you or you
                        make at home. Just enter the name of the food and it
                        will provide you the top 10 matches for that recipe or
                        item.
                    </li>
                    <li>Contact me at : perfectpearchef@gmail.com</li>
                </ul>
            </div>
        );
    }
}
