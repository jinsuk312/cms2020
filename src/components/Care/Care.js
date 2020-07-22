import React, { Component } from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import carelogo from '../../assets/img/carecreditfinance.jpg';
import './Care.css';
class Care extends Component {
	render() {
		return (
			<Jumbotron style={{ marginBottom: '0' }} className="link-container">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={
						'https://www.carecredit.com/apply/confirm.html?encm=AGEGPwZkAWRXawVhUmcKYgAyVjcEZlJlVTcDNFU4U2Y'
					}
				>
					<Image
						alt="carecredit logo"
						height="35px"
						width="auto"
						src={carelogo}
					/>
				</a>
			</Jumbotron>
		);
	}
}

export default Care;
