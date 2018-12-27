import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from 'reactstrap';
import cloudImage from '../images/skyWrap.jpg';
import image from '../images/landing.jpg';

var cloudStyle = {
    backgroundImage: `url(${cloudImage})`,
    backgroundSize: "100% 100%",
};

class Landing extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: true,
        }
        document.body.style.backgroundImage = `url(${image})`;
    }

    render() {
        return (
            <div className = "background">
                <Modal style={{top: "20%"}} isOpen={this.state.modal}>
                    <div style={cloudStyle}>
                        <ModalHeader>
                            <span style={{fontFamily: "Arial, Helvetica, sans-serif", fontSize: "40px", fontWeight: "bold"}}>
                            SporSight
                            </span>
                        </ModalHeader>
                    </div>
                    <ModalBody>
                        <p style={{fontSize: "20px"}}>
                        Welcome to SporSight's Athlete Technique Analysis!
                        </p>
                        <p style={{fontSize: "15px"}}>
                        Please login or create an account.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button outline color="primary" onClick={this.toggle}>Login</Button>{' '}
                        <Button color="link" onClick={this.toggle}>Create an Account</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default Landing;
