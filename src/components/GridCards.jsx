import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import Paper from '@material-ui/core/Paper';
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
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class GuttersGrid extends React.Component {
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
