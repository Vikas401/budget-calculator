import { combineReducers } from 'redux';


import userReducer from './user/user.reducer';
import collectionReducer from './collection/collection.reducer';



const rootReducer = combineReducers({
    user: userReducer,
    collection: collectionReducer
});

export default rootReducer;