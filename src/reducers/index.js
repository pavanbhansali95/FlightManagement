import authReducer from "./auth.reducer";
import { combineReducers } from 'redux';
import flightReducer from "./flight.reducer";
const rootReducer = combineReducers({
    auth: authReducer,
    flight: flightReducer
});
export default rootReducer;