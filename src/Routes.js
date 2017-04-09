import React from 'react';
import {Route, IndexRoute} from 'react-router'

import App from './components/App'

export default(store) => {
	return (
		<Route path="/" component={ App } guestStore={store}>
			<IndexRoute component={ App }/>
		</Route>
	)
}
