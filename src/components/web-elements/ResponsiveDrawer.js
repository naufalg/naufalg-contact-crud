// react
import React, { useEffect } from "react";
import { useHistory, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCrudActions } from "../../redux/actions/getCrud.action";

// material ui
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  spinnerLoading: {
    margin: "20vh 0",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    textDecoration: "none",
    color: "white",
  },
  linkClass: {
    textDecoration: "none",
    color: "secondary",
  },
}));

function ResponsiveDrawer(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCrudActions());
  }, [dispatch]);

  const allContacts = useSelector((state) => state.getCrudReducer.data.data);
  // console.log("aallContacts", allContacts);

  // allContacts !== undefined
  //   ? console.log("allContacts", allContacts)
  //   : console.log("none");

  // material ui
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link className={classes.linkClass} to="/addcontact">
          <ListItem button>
            <AddCircleIcon />
            &nbsp;&nbsp;
            <ListItemText primary={`Add contact`} />
          </ListItem>
        </Link>
        <Divider />
        {allContacts !== undefined ? (
          allContacts.map((item, index) => (
            <div key={index}>
              <ListItem
                onClick={() => {
                  history.push(`contact/${item.id}`);
                }}
                button
              >
                <Avatar
                  alt="Avatar"
                  src={item.photo}
                  className={classes.avaimg}
                />
                &nbsp;&nbsp;
                <ListItemText primary={`${item.firstName} ${item.lastName}`} />
              </ListItem>
            </div>
          ))
        ) : (
          <div className={classes.spinnerLoading}>
            <CircularProgress color="secondary" />
          </div>
        )}
      </List>
      {/* <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <Link to="/" className={classes.title}>
              Contacts
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>Lorem ipsum</Typography>
        <Typography paragraph>Cons </Typography>
      </main> */}
    </div>
  );
}

export default ResponsiveDrawer;