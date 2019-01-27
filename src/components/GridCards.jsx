import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
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
    axios
      .get('/testing')
      .then(response => {
        console.log(`fetched data successfully!! ${JSON.stringify(response.data)}`);
      })
      .catch(error => console.log(error));
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    const { classes } = this.props;
    const renderList = Titles.map(header => (
      <Grid key={header.title} item xs={6}>
        <SimpleCard title={header.title} titleIcon={header.Icon} />
      </Grid>
    ));
    return (
      <Grid container className={classes.root} spacing={16}>
        {renderList}
      </Grid>
    );
  }
}

export default withStyles(styles)(GuttersGrid);
