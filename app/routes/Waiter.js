// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ingredient from '../components/Ingredient';
import * as DSTCompanion from '@paulendri/dst-crockpot-companion-tool';
import Paper from 'material-ui-next/Paper';
import { withStyles } from 'material-ui-next/styles';

type Props = {classes:any};

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  })
});

class Home extends Component<Props> {
  props: Props;

  render() {
    const ingredients = DSTCompanion.Objects.Ingredient.getAll(true);
    const {classes} = this.props;
    const bag = new DSTCompanion.Objects.Bag(true);
    return (
      <div>
        <div data-tid="container">
          <Paper className={classes.root} elavation={4}>
            {ingredients.map(ingredient => {
              let action = {
                onClick : () => {

                }
              }
              return <Ingredient data={ingredient} key={ingredient.name} action={action} />
            })}
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);

