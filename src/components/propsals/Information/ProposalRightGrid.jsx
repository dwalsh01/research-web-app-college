import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import ButtonLink from '../../../util/links/ButtonLink';
import Can from '../../../config/Can';

export default function ProposalRightGrid({ proposal, ...props }) {
  return (
    <Grid item xs={12} sm={8} lg={9}>
      <Paper className={props.classes.paper}>
        <Divider />
        <Typography variant="h4" className={props.classes.padded}>
          Overview
        </Typography>
        <Typography variant="body1" className={props.classes.padded}>
          {proposal.text_description}
        </Typography>
        <Divider />
        <Typography variant="h4" className={props.classes.padded}>
          Target Audience
        </Typography>
        <Typography variant="body1" className={props.classes.padded}>
          {proposal.target_audience}
        </Typography>
        <Divider />
        <Typography variant="h4" className={props.classes.padded}>
          Key Dates
        </Typography>
        <div className={props.classes.padded}>
          <Typography variant="body1" inline>
            Closing date to proposal application submissions are on
          </Typography>

          <Typography variant="subtitle2" inline>
            {' '}
            {props.time}
          </Typography>
        </div>
        <Divider />
        <Typography variant="h4" className={props.classes.padded}>
          Application
        </Typography>
        <Typography variant="body1">
          Interested in applying to this proposal? Please click the button below!
        </Typography>
        {proposal.id && (
          <Can I="apply" a="Proposal">
            {() => (
              <div className={props.classes.padded}>
                <ButtonLink to={proposal.id} text="Apply Now" />
              </div>
            )}
          </Can>
        )}
      </Paper>
    </Grid>
  );
}
