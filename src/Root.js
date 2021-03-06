import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { asyncMiddleware } from 'middlewares/async';
import { stateValidator } from 'middlewares/stateValidator';

import reducers from 'reducers';

const root = ({ children, initialState = {} }) => {
	const store = createStore(
		reducers,
		initialState,
		applyMiddleware(asyncMiddleware, stateValidator)
	);
	return <Provider store={store}>{children}</Provider>;
};

export default root;
