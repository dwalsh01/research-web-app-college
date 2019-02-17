import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

function createData(name, team, id, status) {
  return { id, name, team, status };
}

const rows = [
  createData('Sample Title 1', 'Team 1', 1, 'Accepted'),
  createData('Sample Title 2', 'Team 2', 2, 'Accepted'),
  createData('Sample Title 3', 'Team 3', 3, 'Accepted'),
  createData('Sample Title 4', 'Team 4', 4, 'Accepted'),
  createData('Sample Title 5', 'Team 5', 5, 'Accepted')
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Application ID</TableCell>
            <TableCell>Application Title</TableCell>
            <TableCell>Team Name</TableCell>
            <TableCell>Application Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.team}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(SimpleTable);
