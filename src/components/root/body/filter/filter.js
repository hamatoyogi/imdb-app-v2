import React, { Component } from 'react';
import { ReleaseDateFilter } from './release-date-filter';
import { TypeFilter } from './type-filter';
import { observer } from 'mobx-react';

@observer
export class Filter extends Component {
  render() {

    return (
      <div>
        <ReleaseDateFilter/>
        <TypeFilter/>
      </div>
    );
  }
}

