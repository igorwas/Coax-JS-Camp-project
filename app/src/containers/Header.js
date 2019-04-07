import React from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../components/Header';

const Header = props => <HeaderComponent {...props}/>

const mapStateToProps = state => ({
    currentUserId: state.users.currentUserId
})

export default connect( 
    mapStateToProps
)(Header)