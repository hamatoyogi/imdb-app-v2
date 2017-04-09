import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Row, Col } from 'react-flexbox-grid';
import _ from 'lodash';
import { dataStore } from '../../../../stores/data-store';

import { ResultCard } from './result-card';

@observer
export class Grid extends Component {
  render() {
    if (!dataStore.data) {
      return null;
    }

    const results = dataStore.data.Search;
    const movieCards = () => _.map(results, (movie) => {
      return (
        <ResultCard data={ movie }/>
      )
    });

    return (
      <Row>
        { movieCards() }
      </Row>
    );
  }
}