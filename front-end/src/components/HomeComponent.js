import React from 'react'
import {Link} from 'react-router-dom'
import MenuItemCard from './MenuItemCard'

export default class HelpComponent extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h3>Perfect Pear Chef</h3>
                
                <Link to="/Login">Login</Link>
                <Link to="/CreateUser">Create New User</Link>
                <MenuItemCard/>
            </div>
        )
    }
}