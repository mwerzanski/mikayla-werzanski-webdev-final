import React from 'react'
//import {Link} from 'react-router-dom'
import MenuItemCard from './MenuItemCard'
import UserListCard from './UserListCard'
//import PropTypes from 'prop-types'

export default class MenuComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [{username: 'username1', name: 'name1', weeklyMenu: ['item1', 'item2']}, 
            {username: 'username2', name: 'name2', weeklyMenu: ['item3', 'item2']}] //replace with pulling from store
        }
    }

    render() {
        return (
            <div>
                <h3>Perfect Pear Chef Users:</h3>
                {
                    this.state.users.length > 0 && 
                    <div>
                        {
                            this.state.menuItems.map((menuItem, index) =>
                            <div className='card col-12 mb-2' key={index}>
                                <UserListCard username={users.username} name={users.name}/>
                            </div>)
                        }
                    </div>
                }
            </div>
        )
    }
}