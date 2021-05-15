import axios from 'axios'
import {
    ADD_TIMER_STATE_FAIL,
    ADD_TIMER_STATE_SUCCESS,
    LIST_HISTORY_FAIL,
    LIST_HISTORY_REQUEST,
    LIST_HISTORY_SUCCESS
} from '../constants/timerConstants'

// add timestamp to the database
export const addTimerState = (timestamp) => async (dispatch) => {
    try {

        // send a post request to the server
        const { data } = await axios.post('/api', timestamp)
        dispatch({
            type: ADD_TIMER_STATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        // an error occured
        dispatch({
            type: ADD_TIMER_STATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

// get past button actions from database
export const getHistory = () => async (dispatch) => {
    try {
        dispatch({
            // request history from the server
            type: LIST_HISTORY_REQUEST
        })
        // fetch history from the database
        const { data } = await axios.get(`/api/history`)

        dispatch({
            // history gets fetched succesfully
            type: LIST_HISTORY_SUCCESS,
            payload: data
        })
    } catch (error) {
        // an error occured
        dispatch({
            type: LIST_HISTORY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}