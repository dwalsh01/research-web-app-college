import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { red, green, cyan } from '@material-ui/core/colors';

const styles = theme => ({
  card: {
    minWidth: 250
  },
  pos: {
    marginBottom: 12
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  pos2: {
    marginBottom: 12,
    marginTop: 12
  },
  statusTextRejected: {
    padding: 2,
    marginBottom: 12,
    marginTop: 12,
    color: red[900],
    backgroundColor: red[200],
    textAlign: 'center'
  },
  statusTextSuccess: {
    padding: 2,
    marginBottom: 12,
    marginTop: 12,
    color: green[900],
    backgroundColor: green[200],
    textAlign: 'center'
  },
  statusTextPending: {
    padding: 2,
    marginBottom: 12,
    marginTop: 12,
    color: cyan[900],
    backgroundColor: cyan[200],
    textAlign: 'center'
  }
});

class TeamsCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, name, startDate, endDate, position } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h3">
            {name}
          </Typography>
          <Divider />
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <Typography className={classes.pos2} variant="subtitle2" color="textSecondary">
                {`Position: ${position}`}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              {/* <Typography
                className={classes.statusTextSuccess}
                variant="subtitle2"
                color="textSecondary"
              >
                Status: Success
              </Typography> */}
            </Grid>
          </Grid>
          <Divider />
          <Typography variant="h6" className={classes.pos2}>
            Dates
          </Typography>
          <Typography component="p" variant="subtitle1" className={classes.pos}>
            {`Start: ${startDate}`}
            <br />
          </Typography>
          <Typography component="p" variant="subtitle1" className={classes.pos}>
            {`End: ${endDate}`}
            <br />
          </Typography>
          <Divider />
        </CardContent>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h5" className={classes.pos2}>
              Description
            </Typography>
            <Typography component="p" className={classes.pos}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula ipsum
              vitae metus blandit tincidunt. Mauris vestibulum ligula at elit fringilla, ac finibus
              sem fermentum. Aliquam justo neque, sodales a neque vel, fermentum lobortis nulla.
              Nunc convallis, est quis pretium scelerisque, nunc tortor venenatis ipsum, et
              fermentum dolor odio non orci.
            </Typography>
            <Typography component="p" className={classes.pos}>
              Duis in mauris id sapien elementum tincidunt sed eu quam. Nulla sollicitudin sagittis
              mi, a cursus sem convallis et. Sed non erat sed arcu sagittis imperdiet consectetur eu
              odio. Duis risus nisi, lacinia pulvinar mattis ut, condimentum semper urna.
              Pellentesque lectus orci, commodo in gravida at, condimentum condimentum augue.
            </Typography>
            <Divider />
          </CardContent>
        </Collapse>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TeamsCard);
