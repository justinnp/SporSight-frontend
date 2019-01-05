import React, { Component } from "react";
import { Row } from "reactstrap";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

class VideoArchive extends Component {
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
            <h2>Video Archive</h2>
          </div>
        </Row>
      </div>
    );
  }
}

export default VideoArchive;
