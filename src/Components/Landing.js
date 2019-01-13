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
                        <a href="https://sporsightiam.b2clogin.com/sporsightiam.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1_register&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fopenid%2Freturn&response_type=code%20id_token&response_mode=form_post&client_id=7b66c778-b9c6-4e73-acf6-d26a969978be&state=CUSTOM0O6Zo_pknfMKKEZa1OEEmVOwu4UilTlAmy_state&nonce=M1Lj3o8PvQ5EWMOF67m0QA32pxG2gVLa&scope=offline_access%20openid&x-client-SKU=passport-azure-ad&x-client-Ver=3.0.12">Create an Account</a>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default Landing;
