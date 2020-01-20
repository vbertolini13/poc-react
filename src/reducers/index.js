import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { profile } from './profile';

export default combineReducers({
    profile,
    form: reduxForm
});