import * as LOGIN_CONSTANTS from '../constants/employee';

const loginRequest = () => ({
    type: LOGIN_CONSTANTS.LOGIN_REQUEST,
}) 

const loginReceived = (data) => ({
    type: LOGIN_CONSTANTS.LOGIN_RECEIVED,
    data,
}) 

const loginError = () => ({
    type: LOGIN_CONSTANTS.LOGIN_ERROR,
}) 

export const fetchLoginData = (data) => dispatch => {
    dispatch(loginRequest());
    if (JSON.stringify(data) === JSON.stringify(LOGIN_CONSTANTS.authObject)){
        dispatch(loginReceived(true));
    } else {
        dispatch(loginError());
    }
}

const listingDataRequest = () => ({
    type: LOGIN_CONSTANTS.LISTING_DATA_REQUEST,
}) 

const listingDataReceived = (data) => ({
    type: LOGIN_CONSTANTS.LISTING_DATA_RECEIVED,
    data,
}) 

const listingDataError = () => ({
    type: LOGIN_CONSTANTS.LISTING_DATA_ERROR,
}) 

export const fetchListingData = (data) => dispatch => {
    dispatch(listingDataRequest());
    if (LOGIN_CONSTANTS.employeeData){
        dispatch(listingDataReceived(LOGIN_CONSTANTS.employeeData));
    } else {
        dispatch(listingDataError());
    }
}

export const getLogout = () => ({
    type: LOGIN_CONSTANTS.LOGOUT_USER,
}) 
