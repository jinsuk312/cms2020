import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Footer.css';
class Footer extends Component {
	render() {
		return (
			<div>
				<Jumbotron style={{ marginBottom: '0' }} className="footer-container">
					<div className="footer">
						Salons By JC/CHICAGO MICROBLADING STUDIO 2018
					</div>
				</Jumbotron>
			</div>
		);
	}
}

export default Footer;
