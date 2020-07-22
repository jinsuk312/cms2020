import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Lashextensions.css';
import extImg from '../../../../../../assets/img/lash-ext-service.jpg'

class Lashextensions extends Component {
    render() {
        return (
            <div className="lashes-container">
                <Grid>
                    <Row className="lashes-show-grid">
                        <Col md={6} mdPush={6}>
                            <Image className="extImg" alt="lashes image" src={extImg} thumbnail />
                        </Col>
                        <Col md={6} mdPull={6}>
                            
                            <div>
                                <Row>
                                    <Col md={12} sm={12}>
                                        <h3>Classic Full Set</h3>
                                    </Col>
                                    <Col md={6} mdPush={6}>
                                        <p className="time">$180</p>
                                    </Col>
                                    <Col md={6} mdPull={6}>
                                        <p>Gives a longer, natural mascara look.</p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col md={12} sm={12}>
                                        <h3>Hybrid Lash Full Set (Classic and Volume Mix)</h3>
                                    </Col>
                                    <Col md={6} mdPush={6}>
                                        <p className="time">$200</p>
                                    </Col>
                                    <Col md={6} mdPull={6}>
                                        <p>A blend of single and volume extensions to create natural and fluffier look than classic set (single).</p>
                                    </Col>
                                </Row>
                                
                            </div>
                            <div>
                                <Row>
                                    <Col md={12} sm={12}>
                                        <h3>Volume Full Set</h3>
                                    </Col>
                                    <Col md={6} mdPush={6}>
                                        <p className="time">$250</p>
                                    </Col>
                                    <Col md={6} mdPull={6}>
                                        <p>Use 2D-5D fans to create dramatic look.</p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col md={12} sm={12}>
                                        <h3>Mega Volume Full Set</h3>
                                    </Col>
                                    <Col md={6} mdPush={6}>
                                        <p className="time">$350</p>
                                    </Col>
                                    <Col md={6} mdPull={6}>
                                        <p>Use 5D+ fans, to create luscious lashes with maximum volume.</p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col md={12} sm={12}>
                                        <h3>Classic Fill In (every 2-3 weeks)</h3>
                                    </Col>
                                    <Col md={6} mdPush={6}>
                                        <p className="time">$90(70-85 minutes)</p>
                                    </Col>
                                    <Col md={6} mdPull={6}>
                                        
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col md={12} sm={12}>
                                        <h3>Hybrid Fill In (every 2-3 weeks)</h3>
                                    </Col>
                                    <Col md={6} mdPush={6}>
                                        <p className="time">$110(70-85 minutes)</p>
                                    </Col>
                                    <Col md={6} mdPull={6}>
                                        
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col md={12} sm={12}>
                                        <h3>Volume Fill In (every 2-3 weeks)</h3>
                                    </Col>
                                    <Col md={6} mdPush={6}>
                                        <p className="time">$130(80-90 minutes)</p>
                                    </Col>
                                    <Col md={6} mdPull={6}>
                                        
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col md={12} sm={12}>
                                        <h3>Mega Volume Fill In</h3>
                                    </Col>
                                    <Col md={6} mdPush={6}>
                                        <p className="time">$160</p>
                                    </Col>
                                    <Col md={6} mdPull={6}>

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
export default Lashextensions;