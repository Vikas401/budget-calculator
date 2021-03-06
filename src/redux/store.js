import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

 const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

export const store = createStore(rootReducer, 
    composeEnhencers(applyMiddleware(...middlewares))
    );

export const persistor = persistStore(store);
export default { store, persistor };