import React, { Component } from 'react';
import { Row, Alert } from 'reactstrap';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

//filepond stuff
// Import React FilePond
import { FilePond, registerPlugin, File } from 'react-filepond';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import '../CSS/filepondOverrides.css';
// Register the plugins
registerPlugin(FilePondPluginFileEncode);

class VideoUpload extends Component {
    constructor(props){
        super(props);
        this.state = {
            files: [],
            uploaded: false
        }
    }

    handleInit() {
        console.log("File pond initialized", this.pond)
    }

    toggleSuccess = () => {
        this.setState({
            uploaded: true
        })
    }

    handleSuccess() {
        if(this.state.uploaded) {
            return(
                <Alert color="success" className="text-center">
                    Success! We will notify you when your videos have been processed.
                </Alert> 
            )
        }
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
                    <h2>Video Upload</h2>
                    <p>Please  upload a minimum of 2 videos to be processed.</p>
                    <FilePond
                        ref={ref => this.pond = ref} 
                        allowMultiple={true}
                        server="http://localhost:3001/api/video_upload"
                        oninit={() => this.handleInit()}
                        onprocessfile={this.toggleSuccess}
                        onupdatefiles={(fileItems) => {
                            this.setState({
                                files: fileItems.map(fileItem => fileItem.file)
                            })
                        }}>
                        {this.state.files.map(file => (
                            <File key={file} src={file} origin="local" />
                        ))}
                    </FilePond>
                </div>
            </Row>
            <Row id="body-row" className="mt-3">
                <div class="col offset-md-2">
                    {this.handleSuccess()}
                </div>
            </Row>
            </div>
        )
    }
}

export default VideoUpload;
