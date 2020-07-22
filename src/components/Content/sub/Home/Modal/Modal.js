import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import modalimg from '../../../../../assets/img/special.jpg';
class ModalView extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: true
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render() {
		return (
			<div>
				<Modal show={this.state.show} onHide={this.handleClose} bsSize="small">
					<Modal.Header closeButton>
						<Modal.Title>$50 OFF for New Clients ONLY for PMU</Modal.Title>
						<Modal.Title>
							$200 for Hybrid / Volume Full-Set Eyelash Extensions
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Image src={modalimg} responsive />
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleClose}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
export default ModalView;
