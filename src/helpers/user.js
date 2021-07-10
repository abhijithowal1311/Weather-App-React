import { ACTION_TYPES } from "../context/types"

export default function addUserData(dispatch) {
    let userData = localStorage.getItem("userInfo")
    if (userData) {
        console.log("we are here",userData)
        userData = JSON.parse(userData)
        dispatch({
            type: ACTION_TYPES.ADD_USER_DATA,
            payload: userData
        })
    }
}