import { combineReducers } from "redux";
import activitiesReducer from "./ActivitiesReducers";

const rootReaucer = combineReducers({
    activities: activitiesReducer,

});

export default rootReaucer;