
import React, { Component } from 'react';
import {Typography, TextField, Grid, withStyles} from 'material-ui-next';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    textAlign: 'center',
    width: 150,
  },
  headerRow: {
    textAlign: 'center'
  },
});

const SearchRow = (props) => {
    return (
      <Grid container justify="flex-start" className={props.classes.headerRow} spacing={8}>
        <Grid item xs={12} sm={3} />
        <Grid item xs={12} sm={3}>
          <TextField
            id="searchNames"
            label="Search by Name"
            type="search"
            className={props.classes.textField}
            color="secondary"
            margin="normal"
            onChange={(e) => props.handleSearchChange(e, "name")}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="searchTags"
            label="Search by Tags"
            type="search"
            className={props.classes.textField}
            margin="normal"
            onChange={(e) => props.handleSearchChange(e, "tag")}
          />
        </Grid>
        <Grid item xs={12} sm={3} />
      </Grid>
    );
}

export default withStyles(styles)(SearchRow)