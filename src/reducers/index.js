import { combineReducers } from 'redux';

import {todos} from './todos';
import {visibilityfilter} from './visibilityfilter';


const todoApp = combineReducers({
   todos,visibilityfilter
});

export default todoApp;