import React, {Component} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Sporsight
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>

          <ul className="navbar-nav ml-auto">
            <Dropdown isOpen={this.state.open} toggle={this.toggleDropdown}>
                <DropdownToggle caret style={{backgroundColor: "#F8F9FA", color: "black"}} className="border-0">
                    <span style={{color: "black"}}>Name</span>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem>Reset Password</DropdownItem>
                    <DropdownItem>Payment</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
          </ul>
        </div>
      </nav>
        )
    }
}

export default Topbar;
