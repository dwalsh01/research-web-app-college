/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Paper, Typography, Divider, Grid, Icon, Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteDraft } from '../../../actions/index';

const MyLink = props => <Link to={`/proposals/update/${props.id}`} {...props} />;

function ButtonLink({ to, text = 'Update Draft' }) {
  return (
    <Button
      color="primary"
      variant="contained"
      component={props => <MyLink id={to} {...props} />}
      style={{ marginTop: 10 }}
    >
      {text}
    </Button>
  );
}
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
function DashboardItem({ id, proposals, draft, ...props }) {
  const { classes } = props;
  const errorMsg = <Icon color="error">highlight_off</Icon>;
  const successMsg = <Icon color="primary">check</Icon>;
  const renderDescription = proposals.proposals.map(proposal => {
    if (proposal.id === id) {
      return (
        <div key={id}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Typography variant="h6" color="textPrimary" className={classes.pos2}>
                Deadline:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.statusText} variant="body1" color="textPrimary">
                {proposal.deadline_time}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Typography variant="h6" color="textPrimary" style={{ padding: 10 }}>
            Proposal Description
          </Typography>
          <Typography variant="body1" style={{ minHeight: 80 }} key={id}>
            {proposal.short_text}
          </Typography>
          <Typography variant="subtitle2" className={classes.link}>
            View the{' '}
            <Link to={`/proposals/${proposal.id}`} className={classes.actualLink}>
              proposal
            </Link>{' '}
          </Typography>
          <Divider />
        </div>
      );
    }
    return '';
  });

  const renderList = Object.keys(draft).map(key => {
    if (Object.prototype.hasOwnProperty.call(draft, key)) {
      if (Array.isArray(draft[key]) && draft[key].length > 0) {
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
        <Typography variant="h5" color="textPrimary" style={{ minHeight: 60 }}>
          {draft.title}
        </Typography>
        <Divider />
        {renderDescription}
        <Typography variant="h6" color="textPrimary">
          Form Completion
        </Typography>
        <List>{renderList}</List>
        <Divider />
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <ButtonLink to={draft.id} />
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: 10 }}
              onClick={() => props.deleteDraft(draft.id)}
            >
              Delete Draft
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default connect(
  null,
  { deleteDraft }
)(DashboardItem);
