import { handleActions } from 'redux-actions';
import { GET_PROFILE } from '../constants';

export const profile = handleActions({
    [GET_PROFILE]: (state, action) => action.payload,
}, {});