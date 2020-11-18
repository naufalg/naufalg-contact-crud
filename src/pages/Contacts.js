// Dependencies
// react
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// material ui
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// pages

// components
import "../styles/Contact.scss";
import ResponsiveDrawer from "../components/web-elements/ResponsiveDrawer";
import placeholder from "../components/assets/images/avatar-placeholder.png";
import "../styles/Home.scss";
import { getDetailActions } from "../redux/actions/getDetail.action";
import { deleteActions } from "../redux/actions/delete.action";

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
    height: "80vh",
  },
  avaimg: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "auto",
  },
  spinnerLoading: {
    margin: "20vh 0",
    alignItems: "center",
    textAlign: "center",
  },
}));

function Contact() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const params = useParams();

  const contactId = params.id;

  useEffect(() => {
    dispatch(getDetailActions(contactId));
  }, [dispatch]);

  const detailContactData = useSelector(
    (state) => state.getDetailReducer.data.Contacts
  );

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
                {detailContactData !== undefined ? (
                  <div>
                    <Grid item xs={12}>
                      <Link to="/">
                        <Button>
                          <ArrowBackIcon />
                        </Button>
                      </Link>
                      <Link to={`/edit/${detailContactData._id}`}>
                        <Button
                        // onClick={() => {
                        //   history.push(`edit/${detailContactData.id}`);
                        // }}
                        >
                          <EditIcon />
                        </Button>
                      </Link>
                      <Button
                        onClick={handleClickOpen}
                        //  onClick={() => dispatch(deleteActions(detailContactData.id))}
                      >
                        <DeleteForeverIcon />
                      </Button>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Delete Contact"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            {`Are you sure want to delete ${detailContactData.firstName} ${detailContactData.lastName} ?`}
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose}>Cancel</Button>
                          <Button
                            onClick={() =>
                              dispatch(deleteActions(detailContactData._id))
                            }
                            color="secondary"
                            autoFocus
                          >
                            Delete
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </Grid>
                    <br/>
                    <Grid item xs={12}>
                      <Avatar
                        alt="Avatar"
                        src={
                          detailContactData
                            ? detailContactData.photo
                            : placeholder
                        }
                        className={classes.avaimg}
                      />
                    </Grid>
                    <br />
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={12}>
                        <div className="dataListText">
                          <Typography variant="body2">First Name</Typography>
                          <Typography variant="h5">
                            {detailContactData.firstName}
                          </Typography>
                          <br />
                          <Typography variant="body2">Last Name</Typography>
                          <Typography variant="h5">
                            {detailContactData.lastName}
                          </Typography>
                          <br />
                          <Typography variant="body2">Age</Typography>
                          <Typography variant="h5">
                            {detailContactData.age}
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                ) : (
                  <div className={classes.spinnerLoading}>
                    <CircularProgress color="secondary" />
                  </div>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Contact;
