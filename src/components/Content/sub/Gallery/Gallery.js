import React, { Component } from 'react';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import './Gallery.css';
import micro1 from '../../../../assets/img/brow1.jpg';
import micro2 from '../../../../assets/img/final-micro2.jpeg';
import micro3 from '../../../../assets/img/brow-gallery1.jpeg';
import micro4 from '../../../../assets/img/brow-gallery2.jpeg';
import micro5 from '../../../../assets/img/brows-gallery5.jpeg';
import micro6 from '../../../../assets/img/brows-gallery6.jpeg';
import micro7 from '../../../../assets/img/brows-gallery7.jpeg';
import micro8 from '../../../../assets/img/brows-gallery8.jpeg';
import perm1 from '../../../../assets/img/final-perm1.jpeg';
import perm2 from '../../../../assets/img/perm3.jpeg';
import perm3 from '../../../../assets/img/lashperm3.jpg';
import eyeliner1 from '../../../../assets/img/final-eyeliner1.jpeg';
import eyeliner3 from '../../../../assets/img/ombre.jpeg';
import lash1 from '../../../../assets/img/final-lash1.jpeg';
import lash2 from '../../../../assets/img/lashext2.jpg';
import lash3 from '../../../../assets/img/lashext.jpeg';
import lash4 from '../../../../assets/img/gallery-extra.jpg';
import lips1 from '../../../../assets/img/perm2.jpg';
import lips2 from '../../../../assets/img/final-lips2.jpeg';
import tattoo1 from '../../../../assets/img/tattoo1.jpg';
import tattoo2 from '../../../../assets/img/tattoo2.jpg';
import permMake1 from '../../../../assets/img/phicontour.jpeg';
import permMake2 from '../../../../assets/img/phicontour2.jpeg';
import permMake3 from '../../../../assets/img/powbrows.jpeg';
import brows1 from '../../../../assets/img/phibrows.jpeg';
import brows2 from '../../../../assets/img/phibrows2.jpeg';
import brows3 from '../../../../assets/img/phibrows3.jpeg';

class Gallery extends Component {
	render() {
		return (
			<div className="gallery-container">
				<Grid>
					<p className="disclaimer">
						THE IMAGES BELOW ARE EXAMPLES OF OUR LATEST WORK. FOR FULL GALLERY
						IMAGES, PLEASE VISIT OUR INSTAGRAM PAGE. ENJOY!
					</p>
					<p></p>
					<Row className="img-show-grid">
						<h4 className="gallery-title">Brows</h4>

						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={micro2}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={micro1}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={micro3}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={micro7}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={micro4}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={micro8}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={brows3}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={brows1}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={brows2}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={micro6}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={micro5}
								responsive
							/>
						</Col>
					</Row>
					<Row className="img-show-grid">
						<h4 className="gallery-title">Permanent Makeup</h4>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={eyeliner1}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={lips1}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={lips2}
								responsive
							/>
						</Col>
						{/* <Col  xs={6} s={6} md={6} lg={3} xl={3}>
                        <a href="https://www.instagram.com/chicago_microblading_studio/?hl=en"><Image className="gallery-img-css" alt="gallery image" src={eyeliner2} responsive /></a>
                    </Col> */}
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={eyeliner3}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={permMake2}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={permMake1}
								responsive
							/>
						</Col>

						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={permMake3}
								responsive
							/>
						</Col>
					</Row>
					<Row className="img-show-grid">
						<h4 className="gallery-title">Lash Extensions</h4>

						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={lash3}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={lash4}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={lash2}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={lash1}
								responsive
							/>
						</Col>
					</Row>
					<Row className="img-show-grid">
						<h4 className="gallery-title">Lash Perm</h4>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={perm1}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={perm2}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={perm3}
								responsive
							/>
						</Col>
					</Row>
					<Row className="img-show-grid">
						<h4 className="gallery-title">Non-Laser Tattoo Removal</h4>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={tattoo1}
								responsive
							/>
						</Col>
						<Col xs={6} s={6} md={6} lg={3} xl={3}>
							<Image
								className="gallery-img-css"
								alt="gallery image"
								src={tattoo2}
								responsive
							/>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Gallery;
