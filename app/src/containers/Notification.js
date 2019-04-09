import React from 'react';
import { connect } from 'react-redux';

import NotificationComponent from '../components/Notification';

const Notification = props => <NotificationComponent {...props}/>

const mapStateToProps = state => ({
    type: state.notification.type,
    message: state.notification.message,
    time: state.notification.time
})

export default connect(
    mapStateToProps
)(Notification)