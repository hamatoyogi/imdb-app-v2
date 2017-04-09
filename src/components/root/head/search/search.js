import React from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { uiStore } from '../../../../stores/ui-store';
import { handler } from '../../../../handlers/handler';

export const Search = () => {
  const textFieldProps = {
    name: 'search',
    onChange: (e,v) => {
      uiStore.searchParam = v;
    },
    hintText: 'enter search param'
  };

  const buttonProps = {
    label: 'Search',
    onClick: () => {
      const reqParam = uiStore.searchParam.split(' ').join('+');
      handler.getMoviesFromQuery(reqParam);
    }
  };

  return (
    <div>
      <TextField { ...textFieldProps }/>
      <RaisedButton { ...buttonProps }/>
    </div>
  )
};
