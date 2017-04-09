import React from 'react';
import { observer } from 'mobx-react';

import { Search } from './search/search';

export const Head = () => {
  return (
    <div>
      <Search/>
    </div>
  )
};
