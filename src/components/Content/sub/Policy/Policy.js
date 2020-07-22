import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Policy.css';
import cards from '../../../../assets/img/cards.svg';
// import carelogo from '../../../../assets/img/carecreditfinance.jpg';
class Policy extends React.Component {
	render() {
		return (
			<div className="policy-container">
				<Grid>
					<Row>
						<Col xs={12} md={12}>
							<div>
								<h2>Policies</h2>
								<hr />
							</div>
							<div>
								<h3>Appointments</h3>
								<p>
									We are by appointment only. Please book online or call us at
									312-852-1388. We require a credit card number to hold an
									appointment. The card will only be charged in the event of a
									no-show or late cancellation.
								</p>
							</div>
							<div>
								<h3>Consultation</h3>
								<p>
									All consultations are free of charge, however there is a $100
									penalty for no-shows/cancellations within 24 hours of
									scheduled consultation appointment. If you book a full
									appointment, there is no need to book a seperate consultation
									as each appointment begins with a consultation.
								</p>
							</div>
							<div>
								<h3>Cancellation</h3>
								<p>
									If you need to cancel or reschedule an appointment, please let
									us know no less than 24 hours before your scheduled
									appointment. No-shows or cancellations within 24 hours of
									scheduled appointment will be charged $100 as a penalty.
								</p>
							</div>
							<div>
								<h3>Refund</h3>
								<p>All treatments and products are non-refundable.</p>
							</div>
							<div>
								<div className="img-container">
									<Image
										src="https://cdn1.venmo.com/marketing/images/branding/downloads/venmo_logo_blue.svg"
										alt="venmo logo"
										height="45px"
										width="auto"
									/>
									<Image
										src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
										alt="PayPal Logo"
										height="35px"
										width="auto"
									/>
									<Image
										src={cards}
										alt="payment type"
										height="35px"
										width="auto"
									/>
									{/* <a
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
									</a> */}
								</div>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}
export default Policy;
