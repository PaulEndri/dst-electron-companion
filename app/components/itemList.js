// @flow
import React, {Component} from 'react';
import { withStyles, Paper, AppBar, Toolbar, Typography, Grid } from 'material-ui-next';
import ItemGrid from './itemGrid';

type Props = {
  title:     string,
  classes:   any,
  itemList:  any,
  firstRow?: any,
  itemXs:    number
};

const styles = theme => ({
  flex: {
    flex: 1,
  },
  dstBg: {
    backgroundImage: 'url('+require(`../../assets/paperBackground5.png`)+')',
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    height: "auto"
  },
  dstHdr: {
    backgroundImage: [
      'url('+require(`../../assets/headerBackground5.png`)+')', 'linear-gradient(rgb(108, 77, 44), rgb(38, 27, 16))',
    ],
    //background: 'rgba(62, 39, 35, 0.1)',
    backgroundRepeat: ['repeat-x', 'repeat-x']
  }
});

class ItemList extends Component<Props> {
  props:      Props;

  render() {
    const props = this.props;

    return (
      <Grid item xs={props.itemXs || 12}>
        <Paper elavation={4} className={props.classes.dstBg}>
          <AppBar className={props.classes.dstHdr} position="static">
            <Toolbar>
              <Typography type="title" color="inherit" className={props.classes.flex}>
                {props.title}
              </Typography>
            </Toolbar>
          </AppBar>
          <ItemGrid firstRow={props.firstRow}>
            {props.itemList}
          </ItemGrid>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(ItemList);
