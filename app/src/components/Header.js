import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Notification from '../containers/Notification';

class Header extends Component {
    render(){
        const accountLinks = this.props.currentUserId !== undefined || localStorage.getItem('userId')  ? 
            <span><Link to={`/profile/${localStorage.getItem("userId")}`}>Profile</Link><Link to='/sign-out'>Sign Out</Link></span> :
            <span><Link to='/sign-up'>Sign Up</Link><Link to='/sign-in'>Sign In</Link></span> ;
        return(
            <header>
                <h3>New Insta</h3>
                <Link to='/'>PostsList</Link>
                { accountLinks }
                <Notification />
            </header>  
        )
    }
}

export default Header;