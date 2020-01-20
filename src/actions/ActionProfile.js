import { GET_PROFILE } from './../constants';
import { createAction } from 'redux-actions';
import { apiGetProfile } from '../api/ApiProfile';

export const getProfile = createAction(GET_PROFILE, correo => apiGetProfile(correo));