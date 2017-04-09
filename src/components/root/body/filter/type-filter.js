import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { dataStore } from '../../../../stores/data-store';

export const TypeFilter = ({ types }) => {
  const { data } = dataStore;
  console.log('%c This is data: ','background:black; color:red;', data);

  return (
    <div>
    </div>
  )
}