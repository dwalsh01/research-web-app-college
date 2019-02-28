import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';

export default function ProposalLeftGrid(props) {
  return (
    <Grid item xs={12} sm={4} lg={3}>
      <Card className={props.classes.paper}>
        <Divider />
        <Typography variant="title" className={props.classes.header}>
          Deadline
        </Typography>
        <div className={props.classes.leftSide}>
          <div className={props.classes.padded}>
            Status:
            <Typography variant="subtitle1">{props.proposal.deadline_text}</Typography>
          </div>
          <div className={props.classes.padded}>
            Start Date:
            <Typography
              variant="subtitle2"
              style={
                props.isBeforeToday
                  ? {
                      color: green[500]
                    }
                  : {
                      color: red[500]
                    }
              }
            >
              {props.proposal.start_date}
            </Typography>
          </div>
        </div>
        <Divider />
        <Typography variant="title" className={props.classes.header}>
          Contact
        </Typography>
        <div className={props.classes.leftSide}>
          <div className={props.classes.padded}>
            Email:
            <Typography variant="subtitle1">{props.proposal.contact}</Typography>
          </div>
        </div>
      </Card>
    </Grid>
  );
}
