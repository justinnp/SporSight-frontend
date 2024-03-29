import React, { Component } from "react";
import { Row, Button } from "reactstrap";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
var videoName = "410b6c6df23ff91fc9c9ba8667fbf91e";
const url = "http://localhost:3001";

class VideoArchive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: "",
      retrievedVideo: false
    };
  }

  renderVideo() {
    if (this.state.retrievedVideo) {
      console.log("video url is: " + this.state.videoUrl);

      return (
        <video width="100%" controls>
          <source src={this.state.videoUrl} type="video/mp4" />
        </video>
      );
    }
  }

  fetchVideo(param) {
    fetch(url + `/videos/video_archive/${param}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.sasUrl);
        this.setState({
          videoUrl: data.sasUrl,
          retrievedVideo: true
        });
      })
      .catch(error => {
        console.log("Error in retrieving the video", error);
      });
  }

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
            <Button onClick={() => this.fetchVideo(videoName)}>
              Show Video
            </Button>
          </div>
        </Row>
        <Row id="body-row">
          <div class="col offset-md-2">{this.renderVideo()}</div>
        </Row>
      </div>
    );
  }
}

export default VideoArchive;
