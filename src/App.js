import './App.css';
import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import Heading from './Components/Heading/Heading';
import Login from './Components/Login/login';
import Footer from './Components/Footer/footer';
import NotFound from './Components/Not-found';
import Dashbored from './Components/Dashboard/dashbored';

function App() {
  return (
    <React.Fragment>
      <main className="container">
      <Heading />
      <Switch>
      <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/dashbored" >
            <Dashbored />
          </Route>
          <Route path="*">
          <NotFound />
          </Route>
          </Switch>
      <Footer />
    </main>
      
    </React.Fragment>
    
  );
}

export default App;
