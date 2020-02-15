import { collectionTypeAction } from './collection.types';
import _ from 'lodash';



const budgetReducer = (state ={}, action) => {
     switch (action.type) {
         case collectionTypeAction.CREATE_COLLECTION:
           return {
               ...state, [action.payload.id]: action.payload
           };
           case collectionTypeAction.FETCH_ONE_COLLECTION:
              return { ...state, [action.payload.id]: action.payload };

           case collectionTypeAction.FETCH_COLLECTION:
          
             return { ...state, ..._.mapKeys(action.payload, 'id') };
            
           case collectionTypeAction.DELETE_COLLECTION:
          
                return _.omit(state, action.payload);
                            
               
         
         default:
            return state;
    }
 }
export default budgetReducer;