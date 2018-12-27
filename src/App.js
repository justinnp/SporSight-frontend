import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';
import Topbar from './Components/Topbar';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        {/* the following two routes will not be used in the final product, only using now so you can see what youre working on */}
        <Route path="/topbar" component={Topbar} />
        <Route path="/sidebar" component={Sidebar} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
