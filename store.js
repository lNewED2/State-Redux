import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import activitiesReducer from "./src/reducers/ActivitiesReducers";
const store = configureStore(
    {
        reducer: activitiesReducer,
    },
    composeWithDevTools
);

export default store;