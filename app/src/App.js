import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store'
import './App.css';
import Header from './components/Header/Header';
import PostList from './containers/PostList';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import SignOut from './containers/SignOut';
import UserProfile from './containers/UserProfile';
import FormCreatePost from './containers/FormCreatePost'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Route path="/" component={Header}/>
					<div className="row">
						<Route path="/" exact component={()=><h1 className='col-12'>Homepage</h1>}/>
						<Route path="/posts/" exact component={PostList} />
						<Route path="/posts/add" exact component={FormCreatePost} />
						{/* <Route path="/posts/:id" exact component={PostSinglePage} /> */}
						<Route path="/sign-up" component={SignUp} />
						<Route path="/sign-in" component={SignIn} />
						<Route path="/sign-out" component={SignOut} />
						<Route path="/profile/:id" component={UserProfile} />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;