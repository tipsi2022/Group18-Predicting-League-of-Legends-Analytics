import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: 5,
    minWidth: "22%",
  },
});

export default function Champions(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} key={props.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Champion Pic"
          height="100"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonGroup size="medium" color="primary">
          <Button>A1</Button>
          <Button>A2</Button>
          <Button>A3</Button>
          <Button>A4</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
