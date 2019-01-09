import React, { Component } from 'react';
import {Button, Collapse} from 'reactstrap';
import {FaCaretDown, FaUserEdit, FaFutbol, FaRegCreditCard, FaUser, FaUpload, FaVideo, FaClipboardList, FaArchive, FaHome, FaUsers, FaInfoCircle, FaRegComment, FaRegCopyright} from 'react-icons/fa';
import {Redirect} from 'react-router-dom';
import '../CSS/styles.css';

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapseProfile: false,
            collapseTeam: false,
            collapseSporSight: false,
            collapseVideos: false,
            redirectPrivacy: false,
            redirectRoster: false,
            redirectContact: false,
            redirectUpload: false,
            redirectAccountSettings: false,
            redirectArchive: false,
            redirectSubscriptions: false,
            redirectAboutUs: false
        }
    }

    // REFACTOR THE BELOW, LOOK AT LITERALS FOR INTERPOLATING INTO THIS.STATE

    setRedirect = (param) => {
        this.setState({
          [param]: true
        })
    }

    renderSubscriptionsRedirect = () => {
        if (this.state.redirectSubscriptions) {
          return <Redirect to='/subscriptions' />
        }
    }

    renderAboutUsRedirect = () => {
        if (this.state.redirectAboutUs) {
          return <Redirect to='/about_us' />
        }
    }

    renderAcountSettingsRedirect = () => {
        if (this.state.redirectAccountSettings) {
          return <Redirect to='/account_settings' />
        }
    }

    renderVideoArchiveRedirect = () => {
        if (this.state.redirectArchive) {
          return <Redirect to='/video_archive' />
        }
    }

    renderPrivacyPolicyRedirect = () => {
        if (this.state.redirectPrivacy) {
          return <Redirect to='/privacy_policy' />
        }
    }

    renderVideoUploadRedirect = () => {
        if (this.state.redirectUpload) {
          return <Redirect to='/video_upload' />
        }
    }

    renderContactUsRedirect = param => {
        if (this.state.redirectContact) {
          return <Redirect to="/contact_us" />
        }
    };

    renderRosterRedirect = () => {
        if (this.state.redirectRoster) {
          return <Redirect to='/roster' />
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
                    >
                    <FaUser className="mr-4"/> Profile <FaCaretDown className="float-right"/>
                    </Button>
                    <Collapse isOpen={this.state.collapseProfile}>
                        <ul style={{listStyle: "none"}}>
                            <li className="my-2">
                                {this.renderSubscriptionsRedirect()}
                                <a onClick={() => this.setRedirect("redirectSubscriptions")}>
                                    <FaRegCreditCard className="mr-4"/>Subscriptions
                                </a>
                            </li>
                            <li className="my-2">
                                {this.renderAcountSettingsRedirect()}
                                <a onClick={() => this.setRedirect("redirectAccountSettings")}>
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
                                <a>
                                    <FaHome className="mr-4"/> Dashboard
                                </a>
                            </li>
                            <li className="my-2">
                                {this.renderRosterRedirect()}
                                <a onClick={() => this.setRedirect("redirectRoster")}>
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
                                {this.renderVideoUploadRedirect()}
                                <a onClick={() => this.setRedirect("redirectUpload")}>
                                    <FaUpload className="mr-4"/> Upload Video
                                </a>
                            </li>
                            <li className="my-2">
                                {this.renderVideoArchiveRedirect()}
                                <a onClick={() => this.setRedirect("redirectArchive")}>
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
                                {this.renderAboutUsRedirect()}
                                <a onClick={() => this.setRedirect("redirectAboutUs")}>
                                    <FaInfoCircle className="mr-4"/> About Us
                                </a>
                            </li>
                            <li className="my-2">
                                {this.renderContactUsRedirect()}
                                <a onClick={() => this.setRedirect("redirectContact")}>
                                    <FaRegComment className="mr-4"/> Contact Us
                                </a>
                            </li>
                            <li>
                                {this.renderPrivacyPolicyRedirect()}
                                <a onClick={() => this.setRedirect("redirectPrivacy")}>
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
