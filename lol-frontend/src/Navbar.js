import React from "react";
import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const useStyles = makeStyles({
    root:{
        marginTop:10,
        marginLeft:10
    }
})


function Navbar() {
    const classes=useStyles();
  return (
    <div>
      <ButtonGroup className={classes.root} size="large" color="primary" variant="contained">
        <Button startIcon={<Home />} href="/">
          Home
        </Button>
        <Button href="/sign-in">SignIn</Button>
        <Button href="/sign-up">SignUp</Button>
      </ButtonGroup>
    </div>
  );
}

export default Navbar;
