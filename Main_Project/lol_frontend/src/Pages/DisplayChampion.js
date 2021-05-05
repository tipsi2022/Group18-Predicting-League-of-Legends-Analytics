import { Avatar, Card, CardContent, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const useStyles = makeStyles({
    root: {
        background: "#e7e7e7",
        margin: "0px",
    },
    basic: {
        fontSize: "18px",
    },
    alcenter: {
        textAlign: "center",
        alignContent: "center",
    },
    lore: {
        padding: "5px",
        margin: "5px",
        color: "#000000",
    },
});

function DisplayChampion(props) {
    const { championName } = useParams();
    const [championData, setChampionData] = useState(null);
    const link = `http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion/${championName}.json`;

    useEffect(() => {
        props.changeTitle(`${championName}`);
        axios
            .get(link)
            .then((res) => {
                const arrInit = Object.values(res.data);
                const x = arrInit[3];
                const arrX = Object.values(x);
                const finalData = arrX[0];
                console.log(finalData);
                setChampionData(finalData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const classes = useStyles();

    return (
        <>
            {championData && (
                <div className={classes.root}>
                    <Grid container>
                        <Grid item lg={6}>
                            <img
                                src={`http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/${championData.image.full}`}
                                alt={`${championData.id}`}
                            />
                            <Typography variant="h2" color="textPrimary">
                                {championData.name}
                            </Typography>
                            <Typography variant="h4" color="textSecondary">
                                {championData.title}
                                {championData.skins[1].name}
                            </Typography>
                        </Grid>
                        <Grid item lg={6} justify="center">
                            <Typography variant="h3" color="primary">
                                Abilities
                            </Typography>
                            <Grid container spacing={1} justify="center">
                                <Grid item lg={3}>
                                    <Card variant="outlined" className={classes.alcenter}>
                                        <CardContent>
                                            <Typography variant="h5" component="h2" className={classes.alcenter}>
                                                <Avatar
                                                    variant="rounded"
                                                    src={`http://ddragon.leagueoflegends.com/cdn/11.9.1/img/spell/FlashFrost.png`}
                                                    alt=""
                                                    style={{ alignSelf: "center" }}
                                                />
                                                Q
                                            </Typography>

                                            <Typography color="textSecondary" gutterBottom>
                                                Word of the Day
                                            </Typography>
                                            <Typography color="textSecondary">adjective</Typography>
                                            <Typography variant="body2" component="p">
                                                well meaning and kindly.
                                                <br />
                                                {'"a benevolent smile"'}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item lg={3}>
                                    Q
                                </Grid>
                                <Grid item lg={3}>
                                    Q
                                </Grid>
                                <Grid item lg={3}>
                                    Q
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Paper className={classes.lore}>
                        <Typography variant="p" color="default" className={classes.basic}>
                            "{championData.lore}"
                        </Typography>
                    </Paper>
                </div>
            )}
        </>
    );
}

export default DisplayChampion;
