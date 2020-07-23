import React, { Component } from 'react';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import bg from '../../../../assets/img/bg7.png';
// import Modal from "./Modal/Modal";
import commercial from './THEANSWER.mp3';
import logoAnswer from '../../../../assets/img/theanswer.png';
import './Home.css';
class Home extends Component {
	render() {
		return (
			<div className="home-container">
				<div className="img-cont">
					<Image className="image-bg" alt="image" src={bg} responsive />
				</div>

				<div style={{ marginBottom: '0' }}>
					<Grid>
						<Row>
							<Col md={12} xs={12}>
								<div>
									<div className="text-block">
										<p className="text-container">
											As a Certified PhiBrows and PhiContour Artist from
											PhiAcademy - My experience allows me to achieve a very
											natural look in microblading eyebrows, eyeliner and lips.
										</p>
										<p className="text-container">
											Being a perfectionist is what I take pride in. Bringing
											satisfaction to each and every client is my primary goal.{' '}
										</p>
									</div>
								</div>
							</Col>
						</Row>
						<hr />
						<Row>
							<Col md={8} xs={6}>
								<h5>
									Chicago Microblading Studio is promoted each week on AM 560
									The Answer - click to hear our radio commercial below.
								</h5>
								<audio controls>
									<source src={commercial} type="audio/mpeg" />
									Your browser does not support the audio element.
								</audio>
							</Col>
							<Col md={4} xs={6}>
								<Image
									src={logoAnswer}
									alt="TheAnswer"
									className="answer"
									fluid
								/>
							</Col>
						</Row>
						<hr />
						<Row>
							<Col md={12} xs={12}>
								<h2 className="title-home">Contact Us</h2>
								<form
									method="POST"
									action="https://formspree.io/info@chicagomicrobladingstudio.com"
									id="contact-form"
								>
									<div className="form-group">
										<label className="contact-Title" htmlFor="name">
											Name
										</label>
										<input
											type="text"
											className="form-control"
											id="name"
											name="_name"
											placeholder="Name"
										/>
									</div>
									<div className="form-group">
										<label className="contact-Title" htmlFor="email">
											Email address
										</label>
										<input
											type="email"
											className="form-control"
											id="email"
											name="_replyto"
											placeholder="Email"
										/>
									</div>
									<div className="form-group">
										<label className="contact-Title" htmlFor="subject">
											Subject
										</label>
										<input
											type="text"
											placeholder="Subject"
											className="form-control"
											id="subject"
											name="_subject"
										/>
									</div>

									<div className="form-group">
										<label className="contact-Title" htmlFor="message">
											Message
										</label>
										<textarea
											className="form-control"
											rows="5"
											id="message"
											name="message"
											placeholder="Message"
										/>
									</div>
									<input type="hidden" name="_format" value="plain" />
									<input type="hidden" name="_gotcha" className="honey" />
									<button
										type="submit"
										name="submit"
										className="btn btn-primary"
									>
										Submit
									</button>
								</form>
							</Col>
						</Row>
						<hr />
						<Row>
							<Col md={12} xs={11}>
								<Row className="info">
									<Col xs={12} md={4}>
										<h3 className="title-home">Our Location</h3>
										<p>2860 N Broadway, Salons By JC, Suite 8</p>
										<p>Chicago, IL 60657</p>
									</Col>
									<Col xs={12} md={4}>
										<h3 className="title-home">Contact Info</h3>
										<p>
											Phone: <a href="tel:1-312-852-1388">1-312-852-1388</a>
										</p>
										<p>
											Email:{' '}
											<a
												href="mailto:info@chicagomicrobladingstudio.com?Subject=Question"
												target="_top"
											>
												info@chicagomicrobladingstudio.com
											</a>
										</p>
									</Col>
									<Col xs={12} md={4}>
										<h3 className="title-home">Hours of Operation</h3>
										<p>Sunday-Monday: CLOSED</p>
										<p>Tue-Thurs: 10:00AM-6:00PM</p>
										<p>Friday-Saturday: 10:00AM-4:00PM</p>
									</Col>
								</Row>
							</Col>
						</Row>
					</Grid>
				</div>
				{/* <Modal /> */}
			</div>
		);
	}
}

export default Home;
