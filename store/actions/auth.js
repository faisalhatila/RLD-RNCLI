import AsyncStorage from "@react-native-community/async-storage";
export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";

export const authenticate = (userId,token) => {
    return (dispatch) => {
        dispatch({type:AUTHENTICATE,userId:userId,token:token})
    }
}

export const login = e