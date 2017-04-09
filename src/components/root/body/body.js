import React from 'react';

import { Filter } from './filter/filter';
import { Grid } from './grid/grid';
import { Row, Col } from 'react-flexbox-grid';

export const Body = () => {
  return (
    <div>
      <Row xs="center">
        <Col xs={ 12 }>
          <Filter/>
        </Col>
      </Row>
      <Row xs="center">
        <Col xs={ 12 }>
          <Grid/>
        </Col>
      </Row>
    </div>
  )
};