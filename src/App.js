// dependencies
import React from "react";
import "./styles/App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// components
import ResponsiveDrawer from "./components/web-elements/ResponsiveDrawer";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import lightBlue from '@material-ui/core/colors/lightBlue';
import orange from '@material-ui/core/colors/orange';

// pages
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: lightBlue,
      secondary: orange,
    },
  
  });
  
  return (
    <div>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contact/:id">
              <Contacts />
            </Route>
            <Route path="/addcontact">
              <AddContact />
            </Route>
            <Route path="/edit/:id">
              <EditContact />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
