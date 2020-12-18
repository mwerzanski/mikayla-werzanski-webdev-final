/* eslint-disable react/prop-types */
import React from 'react';
//import {Link} from 'react-router-dom'
//import PropTypes from 'prop-types';

export default class SearchItemCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">
                            Brand Name: {this.props.brandName}
                            <br />
                            Serving Unit: {this.props.servingUnit}
                            <br />
                            Calories: {this.props.calories}
                            <br />
                            Total Fat: {this.props.totalFat}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
