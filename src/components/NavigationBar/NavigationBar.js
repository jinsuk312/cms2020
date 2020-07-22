import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo1 from '../../assets/img/transparent.png';
import './NavigationBar.css';
import care from '../../assets/img/carecredit-logo.svg';
class NavigationBar extends Component {
	render() {
		return (
			<div>
				<Navbar
					style={{
						marginBottom: '0',
						borderBottomRightRadius: '0',
						borderBottomLeftRadius: '0',
						borderTopLeftRadius: '0',
						borderTopRightRadius: '0',
					}}
					collapseOnSelect
				>
					<Navbar.Header>
						<Navbar.Brand>
							<Image
								alt="navigation-logo"
								src={logo1}
								id="navigation-logo"
								responsive
							/>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse className="navbar-main-styles">
						<Nav>
							<LinkContainer exact to="/">
								<NavItem>HOME</NavItem>
							</LinkContainer>

							<LinkContainer to="/services/brow">
								<NavItem>SERVICES</NavItem>
							</LinkContainer>

							<LinkContainer to="/about">
								<NavItem>ABOUT</NavItem>
							</LinkContainer>

							<LinkContainer to="/gallery">
								<NavItem>GALLERY</NavItem>
							</LinkContainer>
							<LinkContainer to="/policy">
								<NavItem>POLICY</NavItem>
							</LinkContainer>
							<LinkContainer to="/faq">
								<NavItem>FAQ</NavItem>
							</LinkContainer>
						</Nav>
						<Nav className="link-box" pullRight>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={'https://squareup.com/gift/K3ENM6W7KF879/order'}
							>
								<p className="nav-external">E-Gift Cards</p>
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={
									'https://squareup.com/appointments/book/3e43dbf4-b71f-4351-883c-d5b6118d4ebd/Q6FTST99A5XXS/services'
								}
							>
								<p className="nav-external">BOOK NOW</p>
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={
									'https://www.carecredit.com/apply/confirm.html?encm=AGEGPwZkAWRXawVhUmcKYgAyVjcEZlJlVTcDNFU4U2Y'
								}
							>
								<Image className="careCreditSVG" src={care} />
							</a>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default NavigationBar;
