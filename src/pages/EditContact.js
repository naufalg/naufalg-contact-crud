// Dependencies
// react
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCrudActions } from "../redux/actions/getCrud.action";

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
import { createActions } from "../redux/actions/create.action";
import { updateActions } from "../redux/actions/update.action";
import { getDetailActions } from "../redux/actions/getDetail.action";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
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
  buttonEdit: {
    margin: "5px 0 0 8px",
  },
}));

function EditContact() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const detailContact = useSelector(
    (state) => state.getDetailReducer.data.data
  );

  const [updateState, setUpdateState] = useState({
    firstName: `${detailContact.firstName}`,
    lastName: `${detailContact.lastName}`,
    age: `${detailContact.age}`,
    photo: `${detailContact.photo}`,
  });

  //handle change form
  const handleChange = (event) => {
    setUpdateState({
      ...updateState,
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
                <Grid item xs={12}>
                  <Link to={`/contact/${detailContact.id}`}>
                    <Button>
                      <ArrowBackIcon />
                    </Button>
                  </Link>
                </Grid>
                <Typography variant="h6">Edit Contact</Typography>
                <form
                  className={classes.formClass}
                  noValidate
                  autoComplete="off"
                  onSubmit={(event) => {
                    dispatch(
                      updateActions(
                        updateState,
                        event,
                        history,
                        detailContact.id
                      )
                    );
                  }}
                >
                  <TextField
                    id="firstNameInput"
                    label="First Name"
                    variant="outlined"
                    type="text"
                    name="firstName"
                    value={updateState.firstName}
                    onChange={(event) => handleChange(event)}
                  />
                  <br />
                  <TextField
                    id="LastNameInput"
                    label="Last Name"
                    variant="outlined"
                    type="text"
                    name="lastName"
                    value={updateState.lastName}
                    onChange={(event) => handleChange(event)}
                  />
                  <br />
                  <TextField
                    id="ageInput"
                    label="Age"
                    variant="outlined"
                    type="text"
                    name="age"
                    value={updateState.age}
                    onChange={(event) => handleChange(event)}
                  />
                  <br />
                  <TextField
                    id="imgInput"
                    label="ImageURL"
                    variant="outlined"
                    type="text"
                    name="photo"
                    value={updateState.photo}
                    onChange={(event) => handleChange(event)}
                  />
                  <br />
                  <Button
                    className={classes.buttonEdit}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Update Profile
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

export default EditContact;
