import React, { Component } from 'react';
import './assets/css/reset.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Social from './components/Social/Social';
import Footer from './components/Footer/Footer';
import Content from './components/Content/main/Content';
import Care from './components/Care/Care';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="master-container">
					<NavigationBar />
					<Content />
					<Care />
					<Social />
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
