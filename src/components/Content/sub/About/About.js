import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './About.css';
import selfie from '../../../../assets/img/selfie.jpg';
class About extends Component {
	render() {
		return (
			<div className="about-container">
				<Grid>
					<Row className="about-show-grid">
						<Col xs={12} md={12}>
							<h2>About Us</h2>
							<Image
								className="selfie"
								alt="selfie"
								src={selfie}
								rounded
								thumbnail
							/>
							<h3>Who Am I?</h3>
							<p>
								I am Yonnie Siu, a licensed Cosmetologist, certified PhiBrows
								Artist from Phi Academy, certified PhiContour Artist from Phi
								Academy and certified Xtreme Lash Artist.
							</p>
							<div>
								<h3>What is PhiBrows - Microblading ?</h3>
								<p>
									PhiBrows is a manual skill of semi permanent eyebrow drawing.
									The shape of the eyebrows is calculated according to the
									golden intersection (phi 1.618) and face morphology. The
									pigment is applied into the surface layer of the dermis using
									disposable sterile tools and pigments are produced in
									accordance with the highest standards.
								</p>
								<p>
									Symmetry is achieved through PhiBrows application and it is
									calculated while the client's eyes are closed because in that
									way mimetic muscles can affect eyebrows symmetry are relaxed.
									Strokes are always drawn in the direction of natural hair
									growth to achieve hyper-realistic look.
								</p>
							</div>
							<div>
								<h3>What is PhiContour?</h3>
								<p>
									PhiContour is skill of semi-permanent makeup of eyeliner, lips
									and eyebrows. The shape is calculated according to the golden
									intersection (phi 1.618) and face morphology.
								</p>
								<p>
									Symmetry of the lips and eyebrows is achieved through PhiBrows
									application. All treatments are performed with sterile, single
									use hygenic modules that offers the client the highest and
									safest standards.
								</p>
							</div>
							<div>
								<h3>What is PhiRemoval?</h3>
								<p>
									PhiRemoval is Non-laser tattoo removal using the safest method
									to remove everything you are not satisfied with. PhiRemoval
									product is based on glycolic acid which features high
									penetration. When applied to the skin, it deeply penetrates
									surrounding tissues with minimal scaring risk. PhiRemoval is
									effective for both body tattoo and permanet makeup as well as
									for microblading.
								</p>
							</div>
							<div>
								<h3>Xtreme Lashes</h3>
								<p>
									Xtreme Lashes Eyelash Extensions are your ultimate answer for
									longer, thicker, more beautiful-looking eyelashes. Developed
									to mimic your natural eyelashes, each Xtreme Lashes Eyelash
									Extension is individually applied to a single eyelash,
									resulting in a gorgeous, natural appearance. Using a
									proprietary adhesive, Xtreme Lashes Extensions are only
									applied by a trained and certified Xtreme Lashes Lash Stlyist.
								</p>
								<p>
									Xtreme Lashes Eyelash Extensions are not traditional false
									eyelashes, eyelash flares or implants. Safe and comfortable to
									wear, Xtreme Lashes Eyelash Extensions are never applied
									directly to your skin or eyelid. With routine touchups every
									two to four weeks, you can have amazing eyelashes
									indefinitely.
								</p>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default About;
