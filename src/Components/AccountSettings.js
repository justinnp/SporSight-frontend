import React, { Component } from "react";
import { Row } from "reactstrap";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

class AccountSettings extends Component {
  render() {
    return (
      <div>
        <Row>
          <Topbar />
        </Row>
        <Row id="body-row">
          <div className="position-fixed">
            <Sidebar />
          </div>
          <div class="col offset-md-2 displayArea">
            <h2>Account Settings</h2>
          </div>
        </Row>
      </div>
    );
  }
}

export default AccountSettings;
