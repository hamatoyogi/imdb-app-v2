import React from 'react';
import { observer } from 'mobx-react';
import { Head } from './head/head';
import { Body } from './body/body';

@observer
export class Root extends React.Component {
  render() {
    return (
      <main>
        <Head/>
        <Body/>
      </main>
    );
  }
}