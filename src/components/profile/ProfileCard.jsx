/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import toTitleCase from '../../util/titleCase';

const styles = theme => ({
  card: {
    maxWidth: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  avatar: {
    backgroundColor: red[500]
  },
  title: {
    fontSize: 24
  },
  subheader: {
    fontSize: 16
  }
});

const ProfileCard = ({ user, classes, profileList }) => (
  <Card className={classes.card}>
    <CardHeader
      classes={{
        title: classes.title,
        subheader: classes.subheader
      }}
      avatar={
        <Avatar aria-label="Name" className={classes.avatar}>
          {`${user.f_name[0].toUpperCase()}${user.l_name[0].toUpperCase()}`}
        </Avatar>
      }
      title={toTitleCase(`${user.f_name} ${user.l_name}`)}
      subheader={user.job_title ? `Occupation: ${toTitleCase(user.job_title)}` : 0}
    />

    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        Update Profile
      </Typography>
      {profileList || ''}
    </CardContent>
  </Card>
);

export default withStyles(styles)(ProfileCard);
