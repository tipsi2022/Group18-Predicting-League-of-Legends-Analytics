import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import logop from "../Assets/provisional.png";
import logob from "../Assets/bronze.png";
import logos from "../Assets/silver.png";
import logog from "../Assets/gold.png";
import logod from "../Assets/diamond.png";

const useStyles = makeStyles({
    title: {
        color: "#2874A6",
        textAlign: "center",
    },
    subt: {
        color: "#6C3483",
        textAlign: "center",
    },
    ter: {
        color: "#555555",
        textAlign: "center",
    },
    cont: {
        marginTop: "35px",
    },
    pad: {
        padding: "10px",
    },
});

function Home() {
    const classes = useStyles();
    return (
        <>
            <Grid container justify="center">
                <Grid item lg={1}></Grid>
                <Grid item lg={2} className={classes.root}>
                    <img src={logop} alt="logo" height="100px"></img>
                </Grid>
                <Grid item lg={2} className={classes.root}>
                    <img src={logog} alt="logo" height="100px"></img>
                </Grid>
                <Grid item lg={2} className={classes.root}>
                    <img src={logod} alt="logo" height="100px"></img>
                </Grid>
                <Grid item lg={2} className={classes.root}>
                    <img src={logos} alt="logo" height="100px"></img>
                </Grid>
                <Grid item lg={2} className={classes.root}>
                    <img src={logob} alt="logo" height="100px"></img>
                </Grid>
                <Grid item lg={12}>
                    <Typography variant="h3" className={classes.title}>
                        Welcome To League of Legends Analytics
                    </Typography>
                </Grid>
                <Grid item lg={8}>
                    <Typography variant="h4" className={classes.subt}>
                        Your One Stop Solution to Learn and Excel the skills to play LOL!
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justify="space-evenly" className={classes.cont} spacing={2}>
                <Grid item lg={6}>
                    <Paper className={classes.pad}>
                        <Typography variant="h5" className={classes.ter}>
                            Why to have such an app?
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                            LoL has a steep learning curve. Shit gets real quickly
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item lg={6}>
                    <Paper Paper className={classes.pad}>
                        <Typography variant="h5" className={classes.ter}>
                            What we have for you!
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                            All the info you need to play LOL
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container justify="space-evenly" className={classes.cont} spacing={2}>
                <Typography variant="h4" color="primary">
                    Explore the app <b>Now!</b>
                </Typography>
            </Grid>
        </>
    );
}

export default Home;
