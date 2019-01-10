import React, { Component } from "react";
import { Row, Button } from "reactstrap";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
var videoName = '07d2d2230c2b7d4b1da05ec3b414f62d';
const url = 'http://localhost:3001'

class VideoArchive extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoUrl: '',
      retrievedVideo: false
    }
  }

  renderVideo() {
    if(this.state.retrievedVideo){
      return (
        <video width="100%" controls >
          <source src={this.state.videoUrl} type="video/mp4" />
        </video>
      )
    }
  }

  fetchVideo(param) {
    fetch(url + `/api/video_archive/${param}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.sasUrl);
      this.setState({
        videoUrl: data.sasUrl,
        retrievedVideo: true
      });
    })
    .catch(error => {
      console.log('Error in retrieving video', error);
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
            <Button onClick={() => this.fetchVideo(videoName)}>Show Video</Button>
          </div>
        </Row>
        <Row id="body-row">
          <div class="col offset-md-2">
            {this.renderVideo()}
          </div>
        </Row>
      </div>
    );
  }
}

export default VideoArchive;
