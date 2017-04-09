import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { dataStore } from '../../../../stores/data-store';
import { observer } from 'mobx-react';
import _ from 'lodash';

const mockYearList = [
  '1974',
  '1975',
  '1976',
  '1998'
];

@observer
export class ReleaseDateFilter extends React.Component {
  state = {
    values: [],
  };

  handleChange = (event, index, values) => this.setState({ values });

  menuItems(values) {
    return mockYearList.map((year) => (
      <MenuItem
        key={year}
        insetChildren={ true }
        checked={ values && values.includes(year) }
        value={ year }
        primaryText={ year }
      />
    ));
  }

  render() {
    const { data } = dataStore;
    const { values } = this.state;

    if (!data) {
      return null;
    }

    const releaseDates = _.map(data.search, (movie) => {
      return movie.year;
    });

    const selectFieldProps = {
      multiple: true,
      hintText: "Select a year",
      values: mockYearList,
      onChange: this.handleChange,
    };

    return (
      <div>
        <SelectField { ...selectFieldProps }>
          { this.menuItems(values) }
        </SelectField>
      </div>
    )
  }
}