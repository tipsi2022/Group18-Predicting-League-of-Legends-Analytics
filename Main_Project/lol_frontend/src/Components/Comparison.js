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
    const [fields, setFields] = useState([{ value: null }]);
    function handleChange(i, event) {
        const values = [...fields];
        values[i].value = event.target.value;
        setFields(values);
    }

    function handleAdd() {
        const values = [...fields];
        values.push({ value: null });
        setFields(values);
    }

    function handleRemove(i) {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    }

    function handleSubmit() {
        console.log(fields);
        // POST request here
    }
    const classes = useStyles();
    return (
        <React.Fragment>
            {fields.map((field, idx) => {
                return (
                    <div key={`${field}-${idx}`}>
                        <FormControl className={classes.formControl}>
                            <TextField
                                variant="outlined"
                                required
                                id="summonerName"
                                label="Summoner Name"
                                name="summonerName"
                                value={field.value || ""}
                                onChange={(e) => handleChange(idx, e)}
                                autoFocus
                            />
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="region select">Region</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="region-select"
                                // value={param.region_arr}
                                // onChange={handleChangeRegion}
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
                        <Button
                            variant="contained"
                            color="primary"
                            // className=".MuiButton-sizeLarge"
                            onClick={() => handleRemove(idx)}
                        >
                            Remove
                        </Button>
                    </div>
                );
            })}
            <Grid container>
                <Grid item lg={12}>
                    <Typography variant="h3">
                        <ButtonGroup variant="contained" color="primary">
                            <Button onClick={() => handleAdd()}> Add another name</Button>
                            <Button onClick={() => handleSubmit()}>Compare!</Button>
                        </ButtonGroup>
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
