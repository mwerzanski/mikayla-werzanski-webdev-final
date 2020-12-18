/* eslint-disable react/prop-types */
import React from 'react';

export default class AdminMenuCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                    </div>
                </div>
            </div>
        );
    }
}
