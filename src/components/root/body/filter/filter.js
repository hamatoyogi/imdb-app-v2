import React, { Component } from 'react';
import { ReleaseDateFilter } from './release-date-filter';
import { observer } from 'mobx-react';

@observer
export class Filter extends Component {
  render() {

    return (
      <div>
        <ReleaseDateFilter/>
      </div>
    );
  }
}

