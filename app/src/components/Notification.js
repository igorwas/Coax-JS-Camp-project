import React from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.addNotification = this.addNotification.bind(this);
        this.notificationDOMRef = React.createRef();
    }

    addNotification(type, message) {
        this.notificationDOMRef.current.addNotification({
            message: message,
            type: type,
            insert: "bottom",
            container: "top-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: { duration: 3000 },
            dismissable: { click: true }
        });
	}
	
	componentWillReceiveProps(newProps){
		this.addNotification(newProps.type, newProps.message )
	}

    render() {
        return (
            <div>
                <ReactNotification ref={this.notificationDOMRef} />
            </div>
        );
    }
}

export default Notification;