import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store'
import Header from './components/Header';
import PostList from './containers/PostList';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import SignOut from './containers/SignOut';
import UserProfile from './containers/UserProfile';
import PostSinglePage from './containers/PostSingle'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Route path="/" component={Header}/>
					<Route path="/" exact component={PostList} />
					<Route path="/posts/" exact component={PostList} />
					<Route path="/posts/:id" exact component={PostSinglePage} />
					<Route path="/sign-up" exact component={SignUp} />
					<Route path="/sign-in" exact component={SignIn} />
					<Route path="/sign-out" exact component={SignOut} />
					<Route path="/profile/:id" exact component={UserProfile} />
				</Router>
			</Provider>
		);
	}
}

export default App;