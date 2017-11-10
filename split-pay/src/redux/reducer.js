import axios from 'axios'

const GET_USER = "GET_USER"

var initialState ={
    user:{}
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER + '_FULFILLED':
        return Object.assign({}, state, {user: action.payload})
        default:
        return state
    }
}

export function getEmployees(){
    const loggedUser = axios.get(`/api/user/:id`).then(res => {
                return res.data
            })
            return {
                type: GET_USER,
                payload: loggedUser
            }
}