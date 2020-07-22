import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./Permanentmakeup.css";
import permImg from "../../../../../../assets/img/perm-service.jpg";

class Permanentmakeup extends Component {
  render() {
    return (
      <div className="eyeliner-container">
        <Grid>
          <Row className="eyeliner-show-grid">
            {/* <Col>
                            <div className="perm-followup">
                                <h4>All prices include Initial and one complimentary follow up session. Additional follow up sessions are priced at $200.</h4>
                            </div>
                        </Col> */}
            <Col md={6} mdPush={6}>
              <div>
                <Image
                  className="perm-img"
                  alt="permanent makeup image"
                  src={permImg}
                  thumbnail
                />
              </div>
            </Col>
            <Col md={6} mdPull={6}>
              <div>
                <Row>
                  <Col md={12} sm={12}>
                    <h3>Lash Enhancement (Top only)</h3>
                  </Col>
                  <Col md={6} mdPush={6}>
                    <p className="time">$350</p>
                  </Col>
                  <Col md={6} mdPull={6}>
                    <p>
                      A thin line is applied right at the lash line to create a
                      natural look.
                    </p>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col md={12} sm={12}>
                    <h3>Winged Eyeliner (Classic Eyeliner/Top Only)</h3>
                  </Col>
                  <Col md={6} mdPush={6}>
                    <p className="time">$550</p>
                  </Col>
                  <Col md={6} mdPull={6}>
                    <p>
                      A popular permanent makeup treatment. This method gives
                      you perfectly applied eyeliner bringing out the beauty of
                      your eyes - highlighting and enhancing its shape.
                    </p>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col md={12} sm={12}>
                    <h3>Stardust Eyeliner (Soft Smokey /Top Only)</h3>
                  </Col>
                  <Col md={6} mdPush={6}>
                    <p className="time">$650</p>
                  </Col>
                  <Col md={6} mdPull={6}>
                    <p>
                      Stardust eyeliner is best known for creating an
                      eyeliner/shadow combination and can feature multiple
                      layers of coloring. The designs are specific to each
                      person and is based on the shape of your eyes and the look
                      you want to achieve.
                    </p>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col md={12} sm={12}>
                    <h3>Aquarelle Lips</h3>
                  </Col>
                  <Col md={6} mdPush={6}>
                    <p className="time">$650</p>
                  </Col>
                  <Col md={6} mdPull={6}>
                    <p>
                      This method is for anyone who wants the appearance of
                      wearing lipstick with a defined lip line.
                    </p>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col md={12} sm={12}>
                    <h3>Ombr&eacute; Lips</h3>
                  </Col>
                  <Col md={6} mdPush={6}>
                    <p className="time">$550</p>
                  </Col>
                  <Col md={6} mdPull={6}>
                    <p>
                      Ombr&eacute; lips are a style in which two or more shades
                      are worn on the mouth.
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
export default Permanentmakeup;
