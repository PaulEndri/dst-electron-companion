// @flow
import React, {Component} from 'react';
import { withStyles } from 'material-ui-next/styles';
import Button from 'material-ui-next/Button';
import Tooltip from 'material-ui-next/Tooltip';
import DSTCompanionTool from '@paulendri/dst-crockpot-companion-tool';

type Props = {
  data: DSTCompanionTool.Recipe,
  classes : any,
  trigger? : string,
  handler? : any
};

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    "background-image": 'url('+require(`../../assets/itemContainer.png`)+')',
    "background-repeat": 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    "&:hover $ingredient" : {
      transform: 'scale(1.2)'
    }
  },
  ingredient: {
    width: 32,
    height: 32,
    zIndex:10,
    transition: 'all .05s ease-in-out'
  }
});

class Recipe extends Component<Props> {
  props:      Props;

  render() {
    const { data } = this.props;
    const props    = this.props;
    let action     = {};
    let fileName   = data.friendly_name.split(' ').join('_').toLowerCase();
    if(props.trigger && props.handler) {
      action[props.trigger] = (e) => props.handler(data);
    }

    return (
      <Tooltip title={data.friendly_name} >
        <Button color="secondary" fab disableRipple className={this.props.classes.button} {...action} >
          <img src={require(`../../assets/${fileName}.png`)} alt={data.name} className={this.props.classes.ingredient}/>
        </Button>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(Recipe);
