import React from 'react';
import {Route, IndexRoute} from 'react-router'

import App from './components/App'

export default(store) => {
	return (
		<Route path="/" component={ App } store={store}>
			<IndexRoute component={ App }/>
		</Route>
	)
}
