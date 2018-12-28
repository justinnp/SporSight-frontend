import React, {Component, Fragment} from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

class Home extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <Sidebar />
      </div>
    );
  }
}

export default Home;
