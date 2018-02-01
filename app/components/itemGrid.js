// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui-next/Grid';
import { withStyles } from 'material-ui-next/styles';

type Props = {
  classes: any,
  children: any,
  firstRow: any
};

const styles = theme => ({
  grid: {
    marginTop: "1%",
    marginBottom: "1%",
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  }
});

class ItemGrid extends Component<Props> {
  props:       Props;

  render() {
    const props = this.props;
    const classes = props.classes;
    return (
      <Grid container className={classes.grid}>
        {props.firstRow}
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={8}>
            {props.children || null}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ItemGrid);