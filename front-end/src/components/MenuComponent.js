import React from 'react'
import {Link} from 'react-router-dom'
import MenuItemCard from './MenuItemCard'
import PropTypes from 'prop-types'

export default class MenuComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItems: [{title: 'test', text: 'test text'}, {title: 'test2', text: 'test text2'}] //replace with pulling from store
        }
    }

    render() {
        return (
            <div>
                <h3>Available Menu Options:</h3>
                {
                    this.state.menuItems.length > 0 && 
                    <div>
                        {
                            this.state.menuItems.map((menuItem, index) =>
                            <div className='card col-12 mb-2' key={index}>
                                <MenuItemCard title={menuItem.title} text={menuItem.text}/>
                            </div>)
                        }
                    </div>
                }
            </div>
        )
    }
}