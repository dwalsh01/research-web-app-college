import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemLink from './ListItemLink';
import Can from '../../config/Can';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class NestedProposals extends React.Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary="Proposals" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <div>
              <Can I="add" a="Proposal">
                {() => (
                  <ListItemLink
                    route="admin/proposals"
                    text="Add Proposals"
                    className={classes.nested}
                  />
                )}
              </Can>
              <Can I="review" a="Proposal">
                {() => (
                  <ListItemLink
                    route="admin/proposals/respond"
                    text="Respond To Applications"
                    className={classes.nested}
                  />
                )}
              </Can>
            </div>
            <Can I="view" a="Proposal">
              {() => (
                <div>
                  <ListItemLink
                    route="proposals/all"
                    text="View Proposals"
                    className={classes.nested}
                  />
                  <ListItemLink route="proposals/drafts" text="Drafts" className={classes.nested} />
                </div>
              )}
            </Can>
          </List>
        </Collapse>
      </div>
    );
  }
}

export default withStyles(styles)(NestedProposals);
