// @flow
import React, { Component } from 'react';
import {Bag, Crockpot, Ingredient} from '@paulendri/dst-crockpot-companion-tool';
import {AppBar, Toolbar, Typography, TextField, Grid, IconButton, withStyles, Paper} from 'material-ui-next';
import SearchHeader from './children/searchBar';
import ItemGrid from '../../components/itemGrid';
import IngredientComponent from '../../components/ingredient';
import RecipeComponent from '../../components/recipe';
import ItemList from '../../components/itemList';

type Props = {classes:any};

const styles = theme => ({
  flex: {
    flex: 1,
  },
  switchButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  grid: {
    marginTop: "1%",
    marginBottom: "1%",
    flexGrow: 1,
    height: '100%'
  },
  gridCol: {
    height: '100%',
    minWidth: 50
  }
});

class BaseView extends Component<Props> {
  props: Props;
  state: any;

  constructor(props) {
    super(props);

    this.state = {
      bag:         new Bag(props.waiter),
      pot:         new Crockpot(props.waiter),
      results:     [],
      filters:     {
        "tag":  "",
        "name": ""
      },
      ingredients: Ingredient.getAll(props.waiter)
    };
  }

  handleSearchChange(e, field) {
    this.setState({
      filters : {
        ...this.state.filters,
        [field] : e.target.value
      }
    });
  }

  addToCrockpot(ingredient: any) {
    if(this.state.pot.ingredients.length < 4) {
      let pot = this.state.pot.add(ingredient._name);
      let result = pot.calculateResult();
      
      if(result instanceof Array === false) {
        result = [result];
      };

      this.setState({
        pot     : pot,
        results : result
      });
    }
  }

  removeFromCrockpot(ingredient: any) {
    let pot = this.state.pot.remove(ingredient._name);

    this.setState({
      pot     : pot,
      results : pot.calculateResult()
    });
  }

  renderIngredientList(ingredients, ui, add=true) {
    return ingredients.map(ingredient => {
      ui++;

      return <IngredientComponent
        data={ingredient}
        key={ingredient.name+ingredient.prefab+ui}
        trigger="onClick"
        handler={add ? (i) => this.addToCrockpot(ingredient) : (i) => this.removeFromCrockpot(ingredient)}
      />
    });
  }

  getFilteredList() {
    const state     = this.state;
    let ingredients = state.ingredients;
    let filters     = state.filters

    if(this.props.waiter === true) {
      ingredients = ingredients.filter(i => i.prefab.indexOf('_seeds') === -1);
    }

    if(filters.tag === "" && filters.name === "") {
      return ingredients;
    }
  
    ingredients = ingredients.filter(i => {
      if(filters.tag !== "") {
        for(var tag of Object.keys(i.tags)) {
          if(i.tags[tag].type.toLowerCase().indexOf(filters.tag) >= 0) {
            return true;
          }
        }
      }

      if(filters.name !== "") {
        return i.name.toLowerCase().indexOf(filters.name) >= 0;
      }
  
      return false;
    });

    return ingredients;
  }

  render() {
    const state     = this.state;
    const classes   = this.props.classes
    let uniqueIndex = 0;
    let all         = this.getFilteredList();

    return (
      <Grid container spacing={24} className={classes.grid}>
        <ItemList
          title="Full Ingredient List"
          firstRow={<SearchHeader handleSearchChange={(i, v) => this.handleSearchChange(i, v)} />}
          itemList={this.renderIngredientList(all, uniqueIndex)}
          itemXs={10}
          className={classes.gridCol}
        />
        <ItemList
          title="Crockpot"
          firstRow={null}
          itemList={this.renderIngredientList(state.pot.ingredients, uniqueIndex, false)}
          itemXs={1}
          className={classes.gridCol}
        />
        <ItemList
          title="Results"
          firstRow={null}
          itemList={this.state.results.map(recipe => {
            uniqueIndex++;

            return <RecipeComponent
              data={recipe}
              key={recipe.name+uniqueIndex}
              trigger="onClick"
              handler={(i) => null}
            />
          })}
          itemXs={1}
          className={classes.gridCol}
        />
      </Grid>
    );
  }
}

export default withStyles(styles)(BaseView);
