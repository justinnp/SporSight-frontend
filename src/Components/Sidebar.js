import React, { Component } from 'react';
import {Button, Collapse} from 'reactstrap';
import {FaCaretDown, FaUserEdit, FaFutbol, FaRegCreditCard, FaUser, FaUpload, FaVideo, FaClipboardList, FaArchive, FaHome, FaUsers, FaInfoCircle, FaRegComment, FaRegCopyright} from 'react-icons/fa';
import {Redirect} from 'react-router-dom';
import '../CSS/sidebar.css';

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapseProfile: false,
            collapseTeam: false,
            collapseSporSight: false,
            collapseVideos: false,
            redirect: false
        }
        this.toggleProfile = this.toggleProfile.bind(this);
        this.toggleSporSight = this.toggleSporSight.bind(this);
        this.toggleTeam = this.toggleTeam.bind(this);
        this.toggleVideos = this.toggleVideos.bind(this);
    }

    setRedirect = (param) => {
        this.setState({
          [param]: true
        })
    }

    renderPrivacyPolicyRedirect = (param) => {
        if (this.state.redirect) {
          return <Redirect to='/privacy_policy' />
        }
      }

    toggleProfile = () => {
        this.setState({
            collapseProfile: !this.state.collapseProfile
        })
    }
    toggleTeam = () => {
        this.setState({
            collapseTeam: !this.state.collapseTeam
        })
    }
    toggleVideos = () => {
        this.setState({
            collapseVideos: !this.state.collapseVideos
        })
    }
    toggleSporSight = () => {
        this.setState({
            collapseSporSight: !this.state.collapseSporSight
        })
    }

    render() {
        return (
            <div id="sidebar-container" class="sidebar-expanded d-none d-md-block">
                <ul class="list-group sticky-top sticky-offset">
                    <li class="list-group-item text-muted d-flex align-items-center menu-collapsed" style={{backgroundColor: "#BFBDBD"}}>
                        <span style={{color: "white"}}>Main Menu</span>
                    </li>
                    <Button 
                        className="rounded-0 text-left"
                        onClick={this.toggleProfile} 
                        class="bg-dark list-group-item list-group-item-action flex-column align-items-start"
                        color="primary"
                        // style={{backgroundColor: "DBD6D6", color:"white"}}
                    >
                    <FaUser className="mr-4"/> Profile <FaCaretDown className="float-right"/>
                    </Button>
                    <Collapse isOpen={this.state.collapseProfile}>
                        <ul style={{listStyle: "none"}}>
                            <li className="my-2">
                                <a style={{color:"black"}}>
                                    <FaRegCreditCard className="mr-4"/>Subscriptions
                                </a>
                            </li>
                            <li className="my-2">
                                <a style={{color:"black"}}>
                                    <FaUserEdit className="mr-4"/>Account Settings
                                </a>
                            </li>
                        </ul>                    
                    </Collapse>
                    <Button 
                        className="rounded-0 text-left"
                        onClick={this.toggleTeam} 
                        class="bg-dark list-group-item list-group-item-action flex-column align-items-start"
                        color="primary"
                    >
                    <FaUsers className="mr-4"/> Team <FaCaretDown className="float-right"/>
                    </Button>
                    <Collapse isOpen={this.state.collapseTeam}>
                        <ul style={{listStyle: "none"}}>
                            <li className="my-2">
                                <a style={{color:"black"}}>
                                    <FaHome className="mr-4"/> Dashboard
                                </a>
                            </li>
                            <li className="my-2">
                                <a style={{color:"black"}}>
                                    <FaClipboardList className="mr-4"/> Roster
                                </a>
                            </li>
                        </ul>                    
                    </Collapse>
                    <Button 
                        className="rounded-0 text-left"
                        onClick={this.toggleVideos} 
                        class="bg-dark list-group-item list-group-item-action flex-column align-items-start"
                        color="primary"
                    >
                    <FaVideo className="mr-4"/> Videos <FaCaretDown className="float-right"/>
                    </Button>
                    <Collapse isOpen={this.state.collapseVideos}>
                        <ul style={{listStyle: "none"}}>
                            <li className="my-2">
                                <a style={{color:"black"}}>
                                    <FaUpload className="mr-4"/> Upload Video
                                </a>
                            </li>
                            <li className="my-2">
                                <a style={{color:"black"}}>
                                    <FaArchive className="mr-4"/> Video Archive
                                </a>
                            </li>
                        </ul>                    
                    </Collapse>
                    <li class="list-group-item text-muted d-flex align-items-center menu-collapsed" style={{backgroundColor: "#BFBDBD"}}>
                        <span style={{color: "white"}}>Other</span>
                    </li>
                    <Button 
                        className="rounded-0 text-left"
                        onClick={this.toggleSporSight} 
                        class="bg-dark list-group-item list-group-item-action flex-column align-items-start"
                        color="primary"
                    >
                    <FaFutbol className="mr-4"/>SporSight <FaCaretDown className="float-right"/>
                    </Button>
                    <Collapse isOpen={this.state.collapseSporSight}>
                        <ul style={{listStyle: "none"}}>
                            <li className="my-2">
                                <a style={{color:"black"}}>
                                    <FaInfoCircle className="mr-4"/> About Us
                                </a>
                            </li>
                            <li className="my-2">
                                <a style={{color:"black"}}>
                                    <FaRegComment className="mr-4"/> Contact Us
                                </a>
                            </li>
                            <li>
                                {this.renderPrivacyPolicyRedirect()}
                                <a onClick={() => this.setRedirect("redirect")}>
                                    <FaRegCopyright className="mr-4"/>   Privacy Policy
                                </a>
                            </li>
                        </ul>                    
                    </Collapse>
                </ul>
            </div>
        ) 
    }
}
export default Sidebar;
