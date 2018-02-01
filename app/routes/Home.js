// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as DSTCompanion from '@paulendri/dst-crockpot-companion-tool';
import {Button, ButtonBase, Grid, Paper} from 'material-ui-next';
import { withStyles } from 'material-ui-next/styles';

type Props = {classes:any};

const styles = theme => ({
  root: {
    marginTop: "7%",
    flexGrow: 1,
  },
  paper: {
    height: 250,
    width: 350,
    marginLeft: 25
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  entryPoint: {
    width:'50%',
    marginTop: 32,
    transition: 'all .2s ease-in-out',
    '&:hover .linkImg': {
      transform: 'scale(1.2)'
    }
  }
});

class Home extends Component<Props> {
  props: Props;

  render() {
    const {classes} = this.props;
    const routes = [
      {label: "DST Vanilla", route: "/vanilla", badge:'dst-v-badge.png'},
      {label: "DST Waiter 101", route: "/waiter", badge:'dst-w-5-badge.png'}
    ]
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={24}>
          {routes.map(route => {
              let fullFileName = require(`../../assets/${route.badge}`);

              return (
                <ButtonBase focusRipple={false} disableRipple={true} key={route.label} classses={{keyboardFocusedClassName: classes.entryPoint}} className={classes.entryPoint} component={ (p) => {
                  return <Link to={route.route} {...p}></Link>
                }}>
                  <img src={fullFileName} alt={route.label} className="linkImg"/>
                </ButtonBase>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Home);

