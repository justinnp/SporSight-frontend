import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Roster from './Components/Roster';
import ContactUs from './Components/ContactUs';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/privacy_policy" component={PrivacyPolicy} />
        <Route path="/roster" component={Roster} />
        <Route path="/contact_us" component={ContactUs} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
