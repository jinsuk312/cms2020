import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Men.css';
import browImg from '../../../../../../assets/img/mens2.jpeg';

class Men extends Component {
	render() {
		return (
			<div className="men-container">
				<Grid>
					<Row className="men-show-grid">
						{/* <Col>
                            <div className="men-followup">
                                <h4>All prices include Initial and one complimentary follow up session. Additional follow up sessions are priced at $200.</h4>
                            </div>
                    </Col> */}
						<Col md={6} mdPush={6}>
							<Image
								className="menImg"
								alt="mens brows image"
								src={browImg}
								thumbnail
							/>
						</Col>
						<Col md={6} mdPull={6}>
							<div>
								<Row>
									<Col md={12} sm={12}>
										<h3>Microblading Eyebrows</h3>
										<p />
									</Col>
									<Col md={6} mdPush={6}>
										<p className="time">$550 (Includes 1st touch up)</p>
									</Col>
									<Col md={6} mdPull={6}>
										<p>
											Also known as feather method, hair stroke brows, 3D brows.
										</p>
										<p>
											A specialized hand tool is used to create realistic
											looking hair strokes to blend with natural hair.
										</p>
									</Col>
								</Row>
							</div>
							<div>
								<Row>
									<Col md={12} sm={12}>
										<h3>Hybrid (combination) Eyebrows</h3>
									</Col>
									<Col md={6} mdPush={6}>
										<p>New clients</p>
										<p className="time">$650 (Includes 1st touch up)</p>
										<p className="time">$550 (Initial only)</p>
									</Col>
									<Col md={6} mdPull={6}>
										<p>
											Combination of hair strokes and light powder shading to
											create natural and fuller looking brows.
										</p>
									</Col>
								</Row>
							</div>
							<div>
								<Row>
									<Col md={12} sm={12}>
										<h3>Ombr&eacute; powder brows</h3>
									</Col>
									<Col md={6} mdPush={6}>
										<p>New clients</p>
										<p className="time">$600 (Includes 1st touch up)</p>
										<p className="time">$500 (Initial only)</p>
									</Col>
									<Col md={6} mdPull={6}>
										<p>
											A machine technique using a specialized needle to create
											more defined, perfect makeup look.
										</p>{' '}
									</Col>
								</Row>
							</div>
							<div>
								<Row>
									<Col md={12} sm={12}>
										<h3>Nano brows</h3>
									</Col>
									<Col md={6} mdPush={6}>
										<p>New clients</p>
										<p className="time">$700 (Includes 1st touch up)</p>
										<p className="time">$600 (Initial only)</p>
									</Col>
									<Col md={6} mdPull={6}>
										<p>
											Semi permanent procedure, nano brows are still 'hair like
											strokes' but they are done with a hand held machine with a
											single flexible 'nano' needle, it's ideal for everybody
											but even more so for oilier skin types because it creates
											less trauma to the epidermis due to the thinness of the
											needle itself.
										</p>
									</Col>
								</Row>
							</div>
							<div>
								<Row>
									<Col md={12} sm={12}>
										<h3>Brow touch up</h3>
									</Col>
									<Col md={6} mdPush={6}>
										<p>
											1-2 months after initial treatment{' '}
											<span className="time">$100</span>
										</p>
										<p>
											3-6 months after initial treatment{' '}
											<span className="time">$150</span>
										</p>
										<p>
											6-12 months after initial treatment{' '}
											<span className="time">$200</span>
										</p>
										<p>
											12-18 months after initial treatment{' '}
											<span className="time">$300</span>
										</p>
										<p className="time">
											*Pricing for touching up Microblading (PMU) done by
											another artist is determined at consultation
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
export default Men;
