import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Lashperm.css';
import lashImg from '../../../../../../assets/img/lashlift.jpg'

class Lashperm extends Component {
    render() {
        return (
            <div className="lips-container">
                <Grid>
                    <Row className="lips-show-grid">
                        <Col md={6} mdPush={6}>
                            <Image className="lashImg" alt="lash perm images" src={lashImg} thumbnail />
                        </Col>
                        <Col md={6} mdPull={6}>
                            <div>
                                <Row>
                                    <Col md={12} sm={12}>
                                        <h3>Elleebana Keratin Lash Lift</h3>
                                    </Col>
                                    <Col md={6} mdPush={6}>
                                        <p className="time">$75</p>
                                    </Col>
                                    <Col md={6} mdPull={6}>
                                        <p>The Keratin Lash Lift is a wonderful alternative to lash extensions and can last up to 8 weeks. Keratin conditions your lashes while increasing volume strength and thickness. Also contains biotin which helps promote lash growth. It's suitable for short or long eyelashes, and it's formeldahyde free.</p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col md={12} sm={12}>
                                        <h3>Lash Lift and Tint Combo</h3>
                                    </Col>
                                    <Col md={6} mdPush={6}>
                                        <p className="time">$95</p>
                                    </Col>
                                    <Col md={6} mdPull={6}>
                                        <p>Curls and darkens the lashes.</p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col md={12} sm={12}>
                                        <h3>Lash Tinting</h3>
                                    </Col>
                                    <Col md={6} mdPush={6}>
                                        <p className="time">$35</p>
                                    </Col>
                                    <Col md={6} mdPull={6}>
                                        
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col md={12} sm={12}>
                                        <h3>Brow Shaping and Tinting</h3>
                                    </Col>
                                    <Col md={6} mdPush={6}>
                                        <p className="time">$45</p>
                                    </Col>
                                    <Col md={6} mdPull={6}>
                                        
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col md={12} sm={12}>
                                        <p>* Organic Lash Botox therapy is complimentary for all Lash Lift and Tint services. </p>
                                    </Col>
                                </Row>
                            </div>
                            
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
};
export default Lashperm