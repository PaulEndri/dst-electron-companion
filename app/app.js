// @flow
import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui-next/styles';

type Props = {
  children: React.Node
};

const theme = createMuiTheme({
  palette: {
    primary: { main: "#3e2723", light: "#000000" },
    secondary: { main: '#ffecb3', dark: "#ffffe5"}
  }
});

export default class App extends React.Component<Props> {
  props: Props;
  render() {
    console.log(__dirname);

    return (
      <div>
        <MuiThemeProvider theme={theme}>
          {this.props.children}
        </MuiThemeProvider>
      </div>
    );
  }
}
