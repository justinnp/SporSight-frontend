import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Roster from './Components/Roster';
import ContactUs from './Components/ContactUs';
import VideoUpload from './Components/VideoUpload';
import VideoArchive from './Components/VideoArchive';
import AboutUs from './Components/AboutUs';
import Subscriptions from './Components/Subscriptions';
import AccountSettings from './Components/AccountSettings';
import ErrorView from './Components/ErrorView';
//test

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/privacy_policy" component={PrivacyPolicy} />
        <Route path="/roster" component={Roster} />
        <Route path="/contact_us" component={ContactUs} />
        <Route path="/video_upload" component={VideoUpload} />
        <Route path="/video_archive" component={VideoArchive} />
        <Route path="/about_us" component={AboutUs} />
        <Route path="/subscriptions" component={Subscriptions} />
        <Route path="/account_settings" component={AccountSettings} />
        <Route path="/error" component={ErrorView} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
