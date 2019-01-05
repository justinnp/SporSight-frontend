import React, { Component } from "react";
import { Row } from "reactstrap";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

class AboutUs extends Component {
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
            <h2>About Us</h2>
            <p></p>
            <p>SporSight's mission is to provide coaches and players with unique analytical data and feedback.<br />
            This helps the player improve their form and technique while promoting a stronger, more well-rounded athlete </p>
          </div>
        </Row>
      </div>
    );
  }
}

export default AboutUs;
