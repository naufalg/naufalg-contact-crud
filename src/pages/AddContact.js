// Dependencies
// react
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCrudActions } from "../redux/actions/getCrud.action";
import { getDetailActions } from "../redux/actions/getDetail.action";

// material ui
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// pages

// components
import "../styles/Contact.scss";
import ResponsiveDrawer from "../components/web-elements/ResponsiveDrawer";
import placeholder from "../components/assets/images/avatar-placeholder.png";
import "../styles/Home.scss";
import {createActions} from '../redux/actions/create.action';

// material ui style
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  container: {
    paddingTop: theme.spacing(4),
    // paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    // display: "",
    overflow: "auto",
    // flexDirection: "column",
    height: "80vh",
  },
  formClass: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  buttonCreate: {
    margin: "5px 0 0 8px",
  },
}));

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [createState, setCreateState] = useState({
    firstName: "",
    lastName: "",
    age: "",
    photo: "",
  });

  //handle change form
  const handleChange = (event) => {
    setCreateState({
      ...createState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <ResponsiveDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <br />
                <Typography variant="h6">Add contact</Typography>
                <form
                  className={classes.formClass}
                  noValidate
                  autoComplete="off"
                  onSubmit={(event) => {
                    dispatch(createActions(createState, event, history));
                }}
                >
                  <TextField
                    id="firstNameInput"
                    label="First Name"
                    variant="outlined"
                    type="text"
                    name="firstName"
                    value={createState.firstName}
                    onChange={(event) => handleChange(event)}
                  />
                  <br />
                  <TextField
                    id="LastNameInput"
                    label="Last Name"
                    variant="outlined"
                    type="text"
                    name="lastName"
                    value={createState.lastName}
                    onChange={(event) => handleChange(event)}
                  />
                  <br />
                  <TextField
                    id="ageInput"
                    label="Age"
                    variant="outlined"
                    type="text"
                    name="age"
                    value={createState.age}
                    onChange={(event) => handleChange(event)}
                  />
                  <br />
                  <TextField
                    id="imgInput"
                    label="ImageURL"
                    variant="outlined"
                    type="text"
                    name="photo"
                    value={createState.photo}
                    onChange={(event) => handleChange(event)}
                  />
                  <br />
                  <Button
                    className={classes.buttonCreate}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Create
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Home;
