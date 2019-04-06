import React, { Component } from 'react';

class UserProfile extends Component {
    componentDidMount(){
        console.log(this.props)
        this.props.getUserProfile(this.props.match.params.id);
    } 

    render(){
        const { 
            selectedUser
        } = this.props;
        console.log(selectedUser)
        const name = (selectedUser.firstName || selectedUser.lastName) ? <h1>{ selectedUser.firstName } { selectedUser.lastName } </h1> : '';
        return(
            <div className='col-12'>
                {name}
                <h4>Email: <a href={`mailto:${selectedUser.email}`}>{selectedUser.email}</a></h4>
            </div>
        )
    }
}

export default UserProfile;