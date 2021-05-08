import React, { useState } from "react";
// import Link from "@material-ui/core/Link";
// import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
    Button,
    ButtonGroup,
    FormControl,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
} from "@material-ui/core";
import axios from "axios";

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

export default function Comparison() {
    const [reg1, setReg1] = useState();
    const [reg2, setReg2] = useState();
    const [play1, setPlay1] = useState();
    const [play2, setPlay2] = useState();
    const [play1det, setPlay1det] = useState(null);
    const [play2det, setPlay2det] = useState(null);

    function handleSubmit() {
        axios
            .post("http://127.0.0.1:8000/api/playerCompare", { region: [reg1, reg2], player: [play1, play2] })
            .then((res) => {
                console.log(res);

                const x = Object.values(res.data);
                console.log(x[0]);
                setPlay1det(x[0]);
                console.log(x[1]);
                setPlay2det(x[1]);
            })
            .catch((err) => console.log(err));
        // POST request here
    }
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container justify="center">
                <Grid item lg={6}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            variant="outlined"
                            required
                            id="summonerName"
                            label="Summoner Name"
                            name="summonerName"
                            value={play1 || ""}
                            onChange={(e) => setPlay1(e.target.value)}
                            autoFocus
                        />
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="region select">Region</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="region-select"
                            value={reg1}
                            onChange={(e) => setReg1(e.target.value)}
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
                </Grid>
                <Grid item lg={6}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            variant="outlined"
                            required
                            id="summonerName"
                            label="Summoner Name"
                            name="summonerName"
                            value={play2 || ""}
                            onChange={(e) => setPlay2(e.target.value)}
                        />
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="region select">Region</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="region-select"
                            value={reg2}
                            onChange={(e) => setReg2(e.target.value)}
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
                </Grid>
                <Grid item lg={12}>
                    <Typography variant="h3">
                        <ButtonGroup variant="contained" color="primary">
                            <Button fullWidth onClick={() => handleSubmit()}>
                                Compare!
                            </Button>
                        </ButtonGroup>
                    </Typography>
                </Grid>
            </Grid>
            {play1det && play2det && (
                <>
                    <Grid container justify="space-evenly">
                        <Grid item lg={6}>
                            <Typography>{play1}</Typography>
                        </Grid>
                        <Grid item lg={6}>
                            <Typography>{play2}</Typography>
                        </Grid>
                    </Grid>
                </>
            )}
        </React.Fragment>
    );
}
