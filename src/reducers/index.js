import { combineReducers } from 'redux';
import reducerTasks from './reducerTasks';

export default combineReducers({
    tasks: reducerTasks
})