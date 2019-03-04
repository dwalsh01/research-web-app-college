import React from 'react';
import { Paper, Typography, Divider, Grid, Icon } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

function checkIfInObj(obj) {
  const keysCheck = ['name', 'org', 'email'];
  let found = false;
  keysCheck.forEach(key => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key].length > 0) {
        found = true;
      }
    }
  });
  return found;
}
export default function DashboardItem({ draft, ...props }) {
  const { classes } = props;
  const errorMsg = <Icon color="error">highlight_off</Icon>;
  const successMsg = <Icon color="primary">check</Icon>;
  const renderList = Object.keys(draft).map(key => {
    if (Object.prototype.hasOwnProperty.call(draft, key)) {
      if (Array.isArray(draft[key])) {
        if (checkIfInObj(draft[key][0])) {
          return (
            <ListItem key={key}>
              <ListItemIcon>{successMsg}</ListItemIcon>
              <ListItemText primary={key} />
            </ListItem>
          );
        }
        return (
          <ListItem key={key}>
            <ListItemIcon>{errorMsg}</ListItemIcon>
            <ListItemText primary={key} />
          </ListItem>
        );
      }
      if (draft[key] && draft[key].length > 0 && key !== 'id') {
        return (
          <ListItem key={key}>
            <ListItemIcon>{successMsg}</ListItemIcon>
            <ListItemText primary={key} />
          </ListItem>
        );
      }
      if (key === 'id') {
        return '';
      }
      return (
        <ListItem key={key}>
          <ListItemIcon>{errorMsg}</ListItemIcon>
          <ListItemText primary={key} />
        </ListItem>
      );
    }
    return '';
  });

  return (
    <div>
      <Paper className={classes.paper}>
        <Typography variant="h5" color="textPrimary">
          {draft.title}
        </Typography>
        <Divider />
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Typography variant="h6" color="textPrimary" className={classes.pos2}>
              Deadline:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              className={classes.statusTextSuccess}
              variant="subtitle2"
              color="textSecondary"
            >
              10/10/2020
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Typography variant="h6" color="textPrimary" style={{ padding: 10 }}>
          Proposal Description
        </Typography>
        <Typography variant="body1" style={{ padding: 10 }}>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Divider />
        <Typography variant="h6" color="textPrimary">
          Form Completion
        </Typography>
        <List>{renderList}</List>
      </Paper>
    </div>
  );
}
