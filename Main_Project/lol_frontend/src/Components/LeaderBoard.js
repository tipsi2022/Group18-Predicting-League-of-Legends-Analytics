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

export default function BasicTable() {
    const classes = useStyles();

    const [param, setParam] = useState({
        leagues_arr: "",
        queue_arr: "",
        region_arr: "",
    });

    const [dat, setDat] = useState(null);

    const handleClick = () => {
        console.log(param);
        setDat(param);
        // POST REQUEST HERE!
    };

    const handleChangeRegion = (event) => {
        setParam({ ...param, region_arr: event.target.value });
    };

    const handleChangeQueue = (event) => {
        setParam({ ...param, queue_arr: event.target.value });
    };

    const handleChangeLeague = (event) => {
        setParam({ ...param, leagues_arr: event.target.value });
    };

    return (
        <React.Fragment>
            <Paper elevation={2} className={classes.root}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">League</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="league-select"
                        value={param.leagues_arr}
                        onChange={handleChangeLeague}
                        required
                        label="Leagues"
                    >
                        <MenuItem value={"challengerleagues"}>Challenger Leagues</MenuItem>
                        <MenuItem value={"grandmasterleagues"}>Grand Master Leagues</MenuItem>
                        <MenuItem value={"masterleagues"}>Master Leagues</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Queue Type</InputLabel>
                    <Select
                        labelId="queue-select"
                        id="queue-select"
                        value={param.queue_arr}
                        onChange={handleChangeQueue}
                        label="Queue Type"
                    >
                        <MenuItem value={"RANKED_SOLO_5x5"}>Solo Rank</MenuItem>
                        <MenuItem value={"RANKED_FLEX_SR"}>Flex Rank</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="region select">Region</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="region-select"
                        value={param.region_arr}
                        onChange={handleChangeRegion}
                        label="Challenger"
                    >
                        <MenuItem value={"br1"}>br 1</MenuItem>
                        <MenuItem value={"eun1"}>eun 1</MenuItem>
                        <MenuItem value={"euw1"}>euw 1</MenuItem>
                        <MenuItem value={"jp1"}>jp 1</MenuItem>
                        <MenuItem value={"kr"}>kr</MenuItem>
                        <MenuItem value={"la1"}>la 1</MenuItem>
                        <MenuItem value={"la2"}>la 2</MenuItem>
                        <MenuItem value={"na1"}>na 1</MenuItem>
                        <MenuItem value={"oc1"}>oc 1</MenuItem>
                        <MenuItem value={"ru"}>ru</MenuItem>
                        <MenuItem value={"tr1"}>tr 1</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" onClick={handleClick}>
                    Submit
                </Button>
            </Paper>
            {dat === null ? (
                <Typography variant="h3" color="textSecondary" align="center">
                    Leaderboard Will be Shown Here!
                </Typography>
            ) : (
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
            )}
        </React.Fragment>
    );
}
