import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import { Nav, NavItem, Navbar, Grid, Row, Col} from 'react-bootstrap';
import Permanentmakeup from './Services/Permanentmakeup/Permanentmakeup'
import Lashextensions from './Services/Lashextensions/Lashextensions'
import Lashlift from './Services/Lashperm/Lashperm'
import Nlt from './Services/Nlt/Nlt'
import Brow from './Services/Brow/Brow'
import Men from './Services/Men/Men'
import './Services.css';
const Services = ({ match }) => {
    return (
        <div className="services-container">
            <Grid>
                <Row>
                    <Col xs={12} md={12}>
                        <Navbar>
                            <Nav bsStyle="pills">
                                <NavItem>
                                    <Link to={`${match.url}/brow`}>Brows/Permanent</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to={`${match.url}/menbrow`}>Men's Brows</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to={`${match.url}/permanentmakeup`}>Permanent Makeup</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to={`${match.url}/lashextensions`}>Lash Extensions</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to={`${match.url}/lashlift`}>Lash Lift & More</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to={`${match.url}/nlt`}>Non-Laser Tattoo Removal</Link>
                                </NavItem> 
                            </Nav>
                            
                        </Navbar>
                    </Col>
                </Row>
            </Grid>
            <Grid>
                <Row>
                    <Col xs={10} md={10}>
                        <Switch>
                            <Route path={`${match.path}/permanentmakeup`} component={Permanentmakeup}/>
                            <Route path={`${match.path}/lashextensions`} component={Lashextensions}/>
                            <Route path={`${match.path}/lashlift`} component={Lashlift}/>
                            <Route path={`${match.path}/nlt`} component={Nlt} />
                            <Route path={`${match.path}/menbrow`} component={Men} />

                            <Route path={`${match.path}/brow`} component={Brow} />
                        </Switch>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}
export default Services