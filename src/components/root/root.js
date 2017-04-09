import React from 'react';
import { observer } from 'mobx-react';
import { Head } from './head/head';
import { Body } from './body/body';
import { Row, Col } from 'react-flexbox-grid';
import { dataStore } from '../../stores/data-store';

@observer
export class Root extends React.Component {
  render() {
    return (
      <main style={ {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Row xs="center">
          <Col xs={ 12 }>
            <Head/>
          </Col>
        </Row>
        <Row xs="center">
          <Col xs={ 12 }>
            <Body/>
          </Col>
        </Row>
      </main>
    );
  }
}