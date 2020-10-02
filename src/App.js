import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./compnents/Header/Header";

import Footer from "./compnents/Footer/Footer";
import Home from "./compnents/Home/Home";
import NotFound from "./compnents/NotFound/NotFound";
import Appointments from "./compnents/Appointments/Appointments";
import Login from "./compnents/Login/Login";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <Router>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/appointments">
            <Appointments />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
