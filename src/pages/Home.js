// Dependencies
// react
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCrudActions } from "../redux/actions/getCrud.action";

// material ui
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

// pages

// components
import ResponsiveDrawer from "../components/web-elements/ResponsiveDrawer";
import placeholder from "../components/assets/images/avatar-placeholder.png";
import "../styles/Home.scss";

// material ui style
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
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
  },
  avaimg: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: "auto",
  },
  caption: {
    margin: "auto",
    fontStyle:"italic"
  },
}));

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCrudActions());
  }, [dispatch]);

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
                <Grid container spacing={1}>
                  <Typography
                    className={classes.caption}
                  >
                    Select contact in the list
                  </Typography>
                </Grid>
                <br />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Home;
