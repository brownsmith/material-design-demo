import React, { Component } from 'react';
import './App.css';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';


const styles = {};

class App extends Component {

  render() {

    let id = 0;
    function createData(name, calories, fat, carbs, protein) {
      id += 1;
      return { id, name, calories, fat, carbs, protein };
    }

    const data = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const { classes } = this.props;

    return (
      <div className="App">
        <Grid container spacing={24}>
          <AppBar position="static" color="default" children={'test string'}>
            <Toolbar>
              <Typography variant="title" color="inherit">
                Admin application - Material UI Next
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid item xs={12} md={3} className="panel">
            <Paper className="paper">

              <List>
                <ListItem>
                  <Avatar className="avatar">
                    {/* <ImageIcon /> */}
                  </Avatar>
                  <ListItemText primary="Admin function" secondary="Details about this" />
                </ListItem>
                <ListItem>
                  <Avatar className="avatar">
                    {/* <WorkIcon /> */}
                  </Avatar>
                  <ListItemText primary="Cancel Slot" secondary="Cancel delivery or collection slot" />
                </ListItem>
                <ListItem>
                  <Avatar className="avatar">
                    {/* <BeachAccessIcon /> */}
                  </Avatar>
                  <ListItemText primary="Amend Order" secondary="Help customer amend order" />
                </ListItem>
                <ListItem>
                  <Button variant="raised" color="primary" className="primary">
                    Primary Button
                  </Button>
                </ListItem>
                <ListItem>
                  <Button variant="raised" color="primary" className="secondary">
                    Secondary Button
                  </Button>
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={9} className="panel">
            <h2>Customer order details</h2>
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell numeric>Calories</TableCell>
                    <TableCell numeric>Fat (g)</TableCell>
                    <TableCell numeric>Carbs (g)</TableCell>
                    <TableCell numeric>Protein (g)</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(n => {
                    return (
                      <TableRow key={n.id}>
                        <TableCell>{n.name}</TableCell>
                        <TableCell numeric>{n.calories}</TableCell>
                        <TableCell numeric>{n.fat}</TableCell>
                        <TableCell numeric>{n.carbs}</TableCell>
                        <TableCell numeric>{n.protein}</TableCell>
                        <TableCell>
                        <Button variant="raised" color="primary" className="primary">
                          Remove
                        </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
