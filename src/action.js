import { apiCall } from './api/api'
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOT_PENDING,
    REQUEST_ROBOT_SUCCESS,
    REQUEST_ROBOT_FAILED,
} from './constants'

export const setSearchfield = (text) => ({
    type:CHANGE_SEARCH_FIELD,
    payload:text
})

export const setRobots = () => (dispatch) => {
    dispatch({ type:REQUEST_ROBOT_PENDING });
    apiCall('https://jsonplaceholder.typicode.com/users')
        .then( users => dispatch({ type:REQUEST_ROBOT_SUCCESS, payload:users }))
        .catch( error => dispatch({ type:REQUEST_ROBOT_FAILED, payload:error }))
}