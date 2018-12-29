import React, {Component} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import {FaSearch} from 'react-icons/fa';

class Topbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            name: 'Justin'
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-dark fixed-top" style={{backgroundColor: "#DBD6D6", paddingBottom:"0px", paddingTop:"0px"}}>
                <button class="navbar-toggler navbar-toggler-right" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarNavDropdown" 
                        aria-controls="navbarNavDropdown" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="/home">
                    <span class="logo stretch" style={{fontSize:"2.1rem"}} >
                        SporSight
                    </span>
                </a>
                <InputGroup className="w-50 mx-auto">
                    <Input placeholder="Search for something!"/>
                    <InputGroupAddon addonType="append">
                    <Button color="primary"> <FaSearch /> </Button>
                    </InputGroupAddon>
                </InputGroup>
                <Dropdown 
                    isOpen={this.state.open} 
                    toggle={this.toggleDropdown} 
                    className="ml-auto"
                >
                    <DropdownToggle caret style={{backgroundColor: "#DAD6D6", border: "none", color:"black"}}>
                        <span style={{color:"black"}}>{this.state.name}</span>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem> Logout </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </nav>
        )
    }
}

export default Topbar;
