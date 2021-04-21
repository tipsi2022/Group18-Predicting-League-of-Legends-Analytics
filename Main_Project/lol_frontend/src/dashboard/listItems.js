import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Link as RouterLink } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import {
  EmojiObjects,
  Equalizer,
  Face,
  FormatListNumbered,
  Person,
  Subject,
} from "@material-ui/icons";

export const mainListItems = (
  <div>
    <ListItem button component={RouterLink} to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={RouterLink} to="/lead">
      <ListItemIcon>
        <Equalizer />
      </ListItemIcon>
      <ListItemText primary="LeaderBoard" />
    </ListItem>
    <ListItem button component={RouterLink} to="/champions">
      <ListItemIcon>
        <Face />
      </ListItemIcon>
      <ListItemText primary="Champions" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FormatListNumbered />
      </ListItemIcon>
      <ListItemText primary="Tier List" />
    </ListItem>
    <ListItem button component={RouterLink} to="/how-to-play">
      <ListItemIcon>
        <Subject />
      </ListItemIcon>
      <ListItemText primary="How to play" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Player Details</ListSubheader>
    <ListItem button component={RouterLink} to="/profile">
      <ListItemIcon>
        <Person />
      </ListItemIcon>
      <ListItemText primary="Your Profile" />
    </ListItem>
    <ListItem button component={RouterLink} to="/personal-stats">
      <ListItemIcon>
        <Equalizer />
      </ListItemIcon>
      <ListItemText primary="Personal Stats" />
    </ListItem>
    <ListItem button component={RouterLink} to="/suggestions">
      <ListItemIcon>
        <EmojiObjects />
      </ListItemIcon>
      <ListItemText primary="Suggestions" />
    </ListItem>
  </div>
);
