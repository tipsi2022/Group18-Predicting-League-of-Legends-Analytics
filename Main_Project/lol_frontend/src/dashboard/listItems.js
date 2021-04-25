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
  Person,
  Subject,
  Timeline,
} from "@material-ui/icons";

export function MainListItems(props) {
  return (
    <div>
      <ListItem
        button
        component={RouterLink}
        to="/"
        onClick={() => props.changeTitle("Dashboard")}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem
        button
        component={RouterLink}
        to="/lead"
        onClick={() => props.changeTitle("LeaderBoard")}
      >
        <ListItemIcon>
          <Equalizer />
        </ListItemIcon>
        <ListItemText primary="LeaderBoard" />
      </ListItem>
      <ListItem
        button
        component={RouterLink}
        to="/champions"
        onClick={() => props.changeTitle("Champions")}
      >
        <ListItemIcon>
          <Face />
        </ListItemIcon>
        <ListItemText primary="Champions" />
      </ListItem>
      <ListItem
        button
        component={RouterLink}
        to="/tier-list"
        onClick={() => props.changeTitle("Tier List")}
      >
        <ListItemIcon>
          <Timeline />
        </ListItemIcon>
        <ListItemText primary="Tier List" />
      </ListItem>
      <ListItem
        button
        component={RouterLink}
        to="/how-to-play"
        onClick={() => props.changeTitle("How to Play")}
      >
        <ListItemIcon>
          <Subject />
        </ListItemIcon>
        <ListItemText primary="How to play" />
      </ListItem>
    </div>
  );
}

export function SecondaryListItems(props) {
  return (
    <div>
      <ListSubheader inset>Player Details</ListSubheader>
      <ListItem
        button
        component={RouterLink}
        to="/profile"
        onClick={() => props.changeTitle("Your Profile")}
      >
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary="Your Profile" />
      </ListItem>
      <ListItem
        button
        component={RouterLink}
        to="/personal-stats"
        onClick={() => props.changeTitle("Personal Stats")}
      >
        <ListItemIcon>
          <Equalizer />
        </ListItemIcon>
        <ListItemText primary="Personal Stats" />
      </ListItem>
      <ListItem
        button
        component={RouterLink}
        to="/suggestions"
        onClick={() => props.changeTitle("Suggestions")}
      >
        <ListItemIcon>
          <EmojiObjects />
        </ListItemIcon>
        <ListItemText primary="Suggestions" />
      </ListItem>
    </div>
  );
}
