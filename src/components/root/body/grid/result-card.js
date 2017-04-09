import React, { Component, PropTypes } from 'react';
import { Col } from 'react-flexbox-grid';

export class ResultCard extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  render() {
    const { Poster, Title, Year } = this.props.data;
    return(
      <Col xs={ 12 } md={ 6 } lg={ 4 }>
        <img src={ Poster }/>
        <div>{ Title }</div>
        <div>{ Year }</div>
      </Col>
    )
  }
}