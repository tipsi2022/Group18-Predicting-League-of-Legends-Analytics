import React, { useState } from "react";
// import Link from "@material-ui/core/Link";
// import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button, ButtonGroup, Grid, TextField } from "@material-ui/core";

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

    return (
        <React.Fragment>
            {fields.map((field, idx) => {
                return (
                    <div key={`${field}-${idx}`}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="summonerName"
                            label="Summoner Name"
                            name="summonerName"
                            value={field.value || ""}
                            onChange={(e) => handleChange(idx, e)}
                            autoFocus
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            // className=".MuiButton-sizeLarge"
                            onClick={() => handleRemove(idx)}
                        >
                            Remove
                        </Button>
                        <br />
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
