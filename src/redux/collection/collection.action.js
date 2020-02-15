import { collectionTypeAction } from './collection.types';
import budget from '../../apis/budget';
//import history from '../../component/history';

export const setCollection = collection => async (dispatch, getState) => {
    const { userId } = getState().user.currentUser;
const response = await budget.post('/budget',{ ...collection, userId})
dispatch({ type: collectionTypeAction.CREATE_COLLECTION, payload: response.data})
}


export const fetchBudget = () => async dispatch => {
    const response = await budget.get('/budget')
    dispatch({ type: collectionTypeAction.FETCH_COLLECTION, payload: response.data})
    }
    
    export const fetchOneCollection = (id) => async dispatch => {
        const response = await budget.get(`/budget/${id}`);
    
        dispatch({ type:collectionTypeAction.FETCH_ONE_COLLECTION, payload: response.data });
    };
    export const deleteBudget = (id) => async dispatch => {
         await budget.delete(`/budget/${id}`)
        dispatch({ type: collectionTypeAction.DELETE_COLLECTION, payload: id})
       // history.push('/')
        }

        