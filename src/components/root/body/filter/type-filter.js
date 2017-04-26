import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { dataStore } from '../../../../stores/data-store';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export class TypeFilter extends Component {
  state = {
    values: [],
  };

  handleChange = (event, index, values) => this.setState({values});

  menuItems(values) {
    return names.map((name) => (
      <MenuItem
        key={name}
        insetChildren={true}
        checked={values && values.includes(name)}
        value={name}
        primaryText={name}
      />
    ));
  }

  render() {
    const { data } = dataStore;
    const { values } = this.state;

    if (!data) {
      return null;
    }

    const selectFieldProps = {
      multiple: true,
      hintText: "Select a name",
      values: names,
      onChange: this.handleChange,
    };

    return (
      <SelectField { ...selectFieldProps }>
        {this.menuItems(values)}
      </SelectField>
    );
  }
}