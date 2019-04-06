import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    render(){
        console.log("inside header")
        console.log(this.props.currentUserId)
        const accountLinks = this.props.currentUserId !== undefined || localStorage.getItem('userId')  ? 
            <span><Link to={'/posts/add'}>Add new post</Link><Link to={`/profile/${localStorage.getItem("userId")}`}>Profile</Link><Link to='/sign-out'>Sign Out(don't work right)</Link></span> :
            <span><Link to='/sign-up'>Sign Up</Link><Link to='/sign-in'>Sign In</Link></span> ;
        return(
            <header>
                <h3>New Insta</h3>
                <Link to='/'>Home  </Link>
                <Link to='/posts'>PostsList</Link>
                { accountLinks }
            </header>  
        )
    }
}

export default Header;