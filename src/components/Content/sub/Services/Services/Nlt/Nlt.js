import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Nlt.css';
import nltImg from '../../../../../../assets/img/nlt.jpeg';

class Nlt extends Component {
	render() {
		return (
			<div className="nlt-container">
				<Grid>
					<Row className="nlt-show-grid">
						<Col md={6} mdPush={6}>
							<Image
								className="nltImg"
								alt="non laser tattoo removal image"
								src={nltImg}
								thumbnail
							/>
						</Col>
						<Col md={6} mdPull={6}>
							<div>
								<Row>
									<Col md={12} sm={12}>
										<h3>PhiRemoval - Non Laser Tattoo Removal</h3>
									</Col>
									<Col md={6} mdPush={6}>
										<p className="time">1 session: $180</p>
										<p className="time">3 sessions: $500</p>
									</Col>
									<Col md={6} mdPull={6}>
										<p>
											The best and the safest method for removal of poor quality
											PMU or tattoos.
										</p>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}
export default Nlt;
