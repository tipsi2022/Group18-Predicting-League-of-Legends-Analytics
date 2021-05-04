import React, { useState } from "react";
// import Link from "@material-ui/core/Link";
// import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Typography } from "@material-ui/core";
// import axios from "axios";   //Uncomment this

export default function Suggestions() {
    const [sName, setSName] = useState("");

    function handleClick(e) {
        // axios
        //     .post("/suggestions", {
        //         summonerName: sName,
        //     })
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err));
        console.log(sName);
    }

    return (
        <div>
            <Typography component="p" variant="h4" color="textPrimary">
                Enter your Summoner Name and Get Suggestions
            </Typography>
            <form>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="summonerName"
                    label="Summoner Name"
                    name="summonerName"
                    onChange={(e) => {
                        setSName(e.target.value);
                    }}
                    value={sName}
                    autoFocus
                />
                <Button
                    variant="contained"
                    color="primary"
                    // className=".MuiButton-sizeLarge"
                    onClick={(e) => handleClick(e)}
                >
                    Get Suggesstions!
                </Button>
            </form>
        </div>
    );
}
