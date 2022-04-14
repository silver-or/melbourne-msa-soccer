import {createSlice} from "@reduxjs/toolkit"

export interface JoinPayload{ // public class JoinPayload{}
    data : { // data는 정해진 attribute
        user : {
            userid: string;
            password: string;
            email: string;
            name: string;
            phone: string;
            birth: string;
            address: string;
        }
    }
}

// state
export interface UserState{
    userLoading: boolean;
    userData: any;
    error: any;
    token: null;
}

const initialState: UserState = {
    userLoading: false,
    userData: null,
    error: null,
    token: null
}

const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {
        joinRequest(state: UserState, action){state.userLoading = true, state.error = null}, // 처음엔 initialState, 이후 draft state로 진화
        joinSuccess(state, action){state.userLoading = true, state.error = action.payload},
        joinFailure(state, action){state.userLoading = true, state.error = action.payload},
        loginRequest(state, action){state.userLoading = true, state.error = null}
    }
})

const {reducer, actions} = userSlice

export const {
    joinRequest, joinSuccess, joinFailure
} = actions

export default reducer