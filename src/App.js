// dependencies
import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import ResponsiveDrawer from "./components/web-elements/ResponsiveDrawer";

// pages
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import AddContacts from "./pages/AddContact";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact/:id">
            <Contacts />
          </Route>
          <Route path="/addcontact">
            <AddContacts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
