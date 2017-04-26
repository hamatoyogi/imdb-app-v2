import CSSModules from 'react-css-modules';
import React from 'react';
import DevTool from 'mobx-react-devtools';
import { observer } from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Root } from './root/root';

import styles from './App.css'

@observer
class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <DevTool/>
        <header>IMDB APP</header>
        <Root/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default CSSModules(App, styles)
