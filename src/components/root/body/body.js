import React from 'react';

import { Filter } from './filter/filter';
import { Grid } from './grid/grid';
import { Row, Col } from 'react-flexbox-grid';

const style = {
  display: 'flex',
  justifyContent: 'center'
};

export const Body = () => {
  return (
    <div>
      <Row xs="center">
        <Col xs={ 12 } md={ 3 } lg={ 12 }>
          <div style={ {...style} }>
            <Filter/>
          </div>
        </Col>
        <Col xs={ 12 } md={ 9 } lg={ 12 }>
          <div style={ {...style} }>
            <Grid/>
          </div>
        </Col>
      </Row>
    </div>
  )
};