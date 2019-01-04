import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from 'reactstrap';
import cloudImage from '../images/skyWrap.jpg';
import image from '../images/landing2.webp';

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
            <div>
                <Modal style={{top: "20%"}} isOpen={this.state.modal}>
                    <div style={cloudStyle}>
                        <ModalHeader>
                            <span class="logo" style={{fontSize: "45px"}}>
                            SporSight
                            </span>
                        </ModalHeader>
                    </div>
                    <ModalBody>
                        <p style={{fontSize: "20px", color: "black"}}>
                        Welcome to SporSight's Athlete Technique Analysis!
                        </p>
                        <p style={{fontSize: "15px", color: "black"}}>
                        Please login or create an account.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <a href="/login/?p=B2C_1_login" class="btn btn-outline-primary mr-2" role="button">Login</a>
                        <a href="/login/?p=B2C_1_register">Create an Account</a>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default Landing;
