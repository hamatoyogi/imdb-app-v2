import CSSModules from 'react-css-modules';
import { container, jumbotron, buttons } from 'bootstrap-css';
import React from 'react';
import DevTool from 'mobx-react-devtools';
import { observer } from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Root } from './root/root';

import styles from './App.css'
Object.assign(styles, jumbotron, container, buttons)

@observer
class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className={styles.container}>
          <DevTool/>
          <Root/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default CSSModules(App, styles)
