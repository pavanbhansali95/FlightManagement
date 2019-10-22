import { FLIGHT_ACTIONS } from './../actions/flight.actions';
let flightDetails = {
    allFlights: [],
    selectedFlightDetails:{},
    seatDetails: [],
    passengerDetails: [],
    selectedPassengerDetails: {}
};
const flightReducer = (state=flightDetails, action) => {
    switch(action.type){
        case FLIGHT_ACTIONS.GETALLFLIGHTS:
            return {
                ...state,
                allFlights: action.payload
            };
            case FLIGHT_ACTIONS.GETSELECTEDFLIGHT:
                return {
                    ...state,
                    selectedFlightDetails: action.payload
                };
            case FLIGHT_ACTIONS.GETFLIGHTPASSENGERS: 
            return {
                ...state,
                passengerDetails: action.payload
            };
            case FLIGHT_ACTIONS.GETFLIGHTSEATS:
                return {
                    ...state,
                    seatDetails: action.payload
                };
            default:
                case FLIGHT_ACTIONS.GETSELECTEDPASSENGER:
                    return {
                        ...state,
                        selectedPassengerDetails: action.payload
                    }
            }
            return state;
    }
export default flightReducer;