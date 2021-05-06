import React, { useState } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import data from "../Data/leaderboardData";
import { Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { SelectAllRounded } from "@material-ui/icons";


const useStyles = makeStyles({
  root: {
      margin: 10,
      padding: 5,
  },
  table: {
      minWidth: "100%",
  },
  formControl: {
      textAlign: "center",
      margin: 5,
      minWidth: 170,
  },
  selectEmpty: {
      // marginTop: theme.spacing(2),
  },
});

export default function PersonalStats() {
  return (
    <React.Fragment>
      <Typography component="p" variant="h4">
        YOU
      </Typography>
    </React.Fragment>
  );
}
