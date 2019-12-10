import * as LOGIN_CONSTANTS from '../constants/employee';

const initialState = {
    loggedIn: false,
    employeeData: {},
    loginError: {},
}

const employeeReducer = (state=initialState, action) => {
    switch(action.type){
        case LOGIN_CONSTANTS.LOGIN_REQUEST: return{
            ...state,
            loginError: {},
        }
        case LOGIN_CONSTANTS.LOGIN_RECEIVED: return{
            ...state,
            loggedIn: action.data,
        }
        case LOGIN_CONSTANTS.LOGIN_ERROR: return{
            ...state,
            loggedIn: false,
            loginError: {
                message: 'Wrong Credentials',
            },
        }
        case LOGIN_CONSTANTS.LISTING_DATA_REQUEST: return{
            ...state,
        }
        case LOGIN_CONSTANTS.LISTING_DATA_RECEIVED: return{
            ...state,
            employeeData: action.data,
        }
        case LOGIN_CONSTANTS.LISTING_DATA_ERROR: return{
            ...state,
            employeeData: {},
        }
        case LOGIN_CONSTANTS.LOGOUT_USER: return{
            ...state,
            loggedIn: false,
        }
        default: return state;
    }
}

export default employeeReducer;