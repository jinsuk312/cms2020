import React, { Component } from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import fb from '../../assets/img/fb.png';
import ig from '../../assets/img/ig.png';
import yelp from '../../assets/img/yelp.png';
import './Social.css';
class Social extends Component {
	render() {
		return (
			<Jumbotron style={{ marginBottom: '0' }} className="link-container">
				<a href="https://www.fb.me/yonnies98">
					<Image src={fb} alt="facebook" className="link" thumbnail />
				</a>
				<a href="https://www.instagram.com/sbjc_chicagomicrobladingstudio/?hl=en">
					<Image src={ig} alt="instagram" className="link" thumbnail />
				</a>
				<a href="https://yelp.to/qTKq/ghDyLu2l6P">
					<Image src={yelp} alt="yelp" className="link" thumbnail />
				</a>
			</Jumbotron>
		);
	}
}

export default Social;
