import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { fetchSampleGrants } from '../actions';
import SimpleCard from './HomePageCard';

const Titles = [
  { title: 'Successful Requests', Icon: 'assignment_turned_in' },
  { title: 'Pending Requests', Icon: 'hourglass_empty' },
  { title: 'Rejected Requests', Icon: 'highlight_off' },
  { title: 'Submit Requests', Icon: 'assignment' }
];

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
    const renderRedux = data.map(grant => (
      <Grid key={grant.grant_id} item xs={6}>
        <SimpleCard title={grant.grant_title} />
      </Grid>
    ));
    const renderList = Titles.map(header => (
      <Grid key={header.title} item xs={6}>
        <SimpleCard title={header.title} titleIcon={header.Icon} />
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
