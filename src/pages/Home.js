import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import ResponsiveDrawer from "../components/web-elements/ResponsiveDrawer";

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
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  textCaption: {
    fontStyle: "italic",
    margin: "5vh auto",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ResponsiveDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography className={classes.textCaption}>
                  Select contact from the list
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Home;
