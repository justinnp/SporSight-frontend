import React, {Component} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container } from 'reactstrap';

class Topbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
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
            <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">
                    <span class="menu-collapsed">SporSight</span>
                </a>
                <h5 className="ml-auto" style={{color: "white"}}>Amaan</h5>
            </nav>
        )
    }
}

export default Topbar;
