import React from 'react'
//import {Link} from 'react-router-dom'
import NavbarComponent from './NavbarComponent';

export default class HelpComponent extends React.Component {
    render() {
        return (
            <div>
                <NavbarComponent/>
                <h3>Help Information</h3>
            </div>
        )
    }
}