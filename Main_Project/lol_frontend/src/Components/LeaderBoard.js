import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import data from "../Data/leaderboardData";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
    minWidth: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
});

export default function BasicTable() {
  const classes = useStyles();

  const [region, setRegion] = React.useState("");
  const [rank, setRank] = React.useState("");
  const [challenger, setChallenger] = React.useState("");

  const handleChangeRegion = (event) => {
    setRegion(event.target.value);
    console.log(event.target.value); //Remove later
  };

  const handleChangeRank = (event) => {
    setRank(event.target.value);
    console.log(event.target.value); //Remove later
  };

  const handleChangeChallenger = (event) => {
    setChallenger(event.target.value);
    console.log(event.target.value); //Remove later
  };

  return (
    <React.Fragment>
      <Paper elevation={2} className={classes.root}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Region</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="region-select-outlined"
            value={region}
            onChange={handleChangeRegion}
            label="Region"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Region 1"}>Region 1</MenuItem>
            <MenuItem value={"Region 2"}>Region 2</MenuItem>
            <MenuItem value={"Region 3"}>Region 3</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Rank</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="rank-select-outlined"
            value={rank}
            onChange={handleChangeRank}
            label="Rank"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Rank 1"}>Rank 1</MenuItem>
            <MenuItem value={"Rank 2"}>Rank 2</MenuItem>
            <MenuItem value={"Rank 3"}>Rank 3</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Challenger
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="challenger-select-outlined"
            value={challenger}
            onChange={handleChangeChallenger}
            label="Challenger"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Challenger 1"}>Challenger 1</MenuItem>
            <MenuItem value={"Challenger 2"}>Challenger 2</MenuItem>
            <MenuItem value={"Challenger 3"}>Challenger 3</MenuItem>
          </Select>
        </FormControl>
      </Paper>
      <Paper className={classes.table} elevation={2}>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Rank</TableCell>
                <TableCell align="center">Summoner</TableCell>
                <TableCell align="center">Tier</TableCell>
                <TableCell align="center">LP</TableCell>
                <TableCell align="center">Win Rate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((x) => (
                <TableRow key={x.rank}>
                  <TableCell align="center">{x.rank}</TableCell>
                  <TableCell align="center">{x.name}</TableCell>
                  <TableCell align="center">{x.tier}</TableCell>
                  <TableCell align="center">{x.lp}</TableCell>
                  <TableCell align="center">{x.winRate} %</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </React.Fragment>
  );
}
