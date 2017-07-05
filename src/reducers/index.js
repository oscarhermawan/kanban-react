import { combineReducers } from 'redux';

import taskReducer from './taskReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  tasks:taskReducer,
  modal:modalReducer
});
