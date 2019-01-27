import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { fetchSampleGrants } from '../actions';
import SimpleCard from './HomePageCard';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class GuttersGrid extends React.Component {
  componentDidMount() {
    this.props.fetchSampleGrants();
  }

  render() {
    const { classes, fetching, data, error } = this.props;
    console.log('error');
    if (fetching) {
      return <h2>Loading data...</h2>;
    }
    if (error) {
      return <h1>Error! Please try again!</h1>;
    }
    const renderRedux = data.map(grant => (
      <Grid key={grant.grant_id} item xs={6}>
        <SimpleCard title={grant.grant_title} />
      </Grid>
    ));
    return (
      <Grid container className={classes.root} spacing={16}>
        {renderRedux}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.AllGrants.fetching,
  data: state.AllGrants.data,
  error: state.AllGrants.error
});

export default connect(
  mapStateToProps,
  { fetchSampleGrants }
)(withStyles(styles)(GuttersGrid));
