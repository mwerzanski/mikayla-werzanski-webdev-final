import React from 'react'
import {Link} from 'react-router-dom'

export default class HomeComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            activeUser: false // pull from store to see if a user is active
        }
    }

    render() {
        return (
            <div>
                {

                    <div className='text-right'>
                        <Link to="/Login" className="btn btn-success mr-2">Login</Link>
                        <Link to="/CreateUser" className="btn btn-success">Create New User</Link>
                    </div>
                }
                <div className='container card help-panel mt-3'>
                    <h3 className='text-center'>Welcome to the Perfect Pear</h3>
                    <p>I'm Kirsten Kilty, owner and chef of the Perfect Pear. I am a personal chef and a caterer.
                        As a personal chef, I would come into your home weekly and prepare the menu we have created together.
                        You would be left with simple instructions to reheat the groumet meals that have been created.
                    </p>
                </div>
            </div>
        )
    }
}