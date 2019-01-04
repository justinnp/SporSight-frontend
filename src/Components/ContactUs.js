import React, { Component } from "react";
import { Row } from "reactstrap";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

class ContactUs extends Component {
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
            <h2>Contact Us</h2>{" "}
            <p>
              <a href="mailto:sporsight@gmail.com">sporsight@gmail.com</a>
            </p>
          </div>
        </Row>
      </div>
    );
  }
}

export default ContactUs;
