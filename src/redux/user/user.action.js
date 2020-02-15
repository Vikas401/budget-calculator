import { userTypeAction } from './user.types';

export const setCurrentUser = user => ({
    type: userTypeAction.SET_CURRENT_USER,
    payload: user
});