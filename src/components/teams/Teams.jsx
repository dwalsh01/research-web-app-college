import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import pageTitle from '../../util/pageTitle';
import TeamsCard from './TeamsCard';
import { fetchTeams } from '../../actions';
import Loader from '../loader/Loader';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

class Teams extends React.Component {
  componentDidMount() {
    pageTitle('Teams');
    this.props.fetchTeams();
  }

  render() {
    const { classes, TeamsReducer } = this.props;
    const RenderCards = TeamsReducer.teams.map(team => (
      <Grid item xs={12} sm={6} lg={6} key={team.primary_attribution}>
        <TeamsCard
          className={classes.paper}
          name={team.name}
          startDate={team.start_date}
          endDate={team.end_date}
          position={team.position}
        />
      </Grid>
    ));
    if (TeamsReducer.isFetching === true) {
      return <Loader />;
    }

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {RenderCards}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ TeamsReducer }) => ({
  TeamsReducer
});

export default connect(
  mapStateToProps,
  { fetchTeams }
)(withStyles(styles)(Teams));
