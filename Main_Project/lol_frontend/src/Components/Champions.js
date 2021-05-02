import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    makeStyles,
    ButtonGroup,
    Typography,
    Button,
    CardMedia,
    CardContent,
    CardActions,
    CardActionArea,
    Card,
} from "@material-ui/core";
// import championData from "../Data/allChampionsData";

// const useStyles = makeStyles({
//     root: {
//         margin: 5,
//         minWidth: "22%",
//     },
// });

export default function Champions() {
    const [championData, setChampionData] = useState([]);
    useEffect(() => {
        axios
            .get("http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json")
            .then((res) => {
                console.log(Object.values(res.data.data));
                setChampionData(Object.values(res.data.data));
            })
            .catch((err) => console.log(err));
    }, []);

    return <>{championData.map(CreateChampions)}</>;
}

function CreateChampions(props) {
    // const classes = useStyles();
    return (
        <Card key={props.id}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Champion Pic"
                    height="100"
                    image={`http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/${props.image.full}`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="primary" component="p">
                        {props.tags.join(" /")}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <ButtonGroup size="small" color="primary">
                    <Button>Att</Button>
                    {/* {props.info.attack} */}
                    <Button>Def</Button>
                    {/* {props.info.defense} */}
                    <Button>mag</Button>
                    {/* {props.info.magic} */}
                    <Button>diff</Button>
                    {/* {props.info.difficulty} */}
                </ButtonGroup>
            </CardActions>
        </Card>
    );
}
