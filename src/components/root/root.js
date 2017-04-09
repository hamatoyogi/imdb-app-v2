import React from 'react';
import DevTools from 'mobx-react-devtools';

import { Head } from './head/head';
import { Body } from './body/body';

export class Root extends React.Component {
  render() {
    return (
      <main>
        <DevTools />
        <Head/>
        <Body/>
      </main>
    );
  }
}