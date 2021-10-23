import React from "react";
import "./App.css";
import { Homepage } from "./containers/homepage";
import CarUploadPage  from "./containers/CarUploadPage";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";





function App(props) {
  return (
  <>
  <BrowserRouter>
   <Switch>
     <Route exact path="/" component={ Homepage }/>
     <Route path="/upload" component={ CarUploadPage } />
     </Switch> 
  </BrowserRouter>
  </>
  )
}

export default App;
