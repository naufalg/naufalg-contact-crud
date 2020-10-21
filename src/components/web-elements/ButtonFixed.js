import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    right: 0,
  },
}));

export default function ButtonFixed() {
  const classes = useStyles();

  return (
    <Button variant="contained" color="primary">
      +
    </Button>
  );
}
