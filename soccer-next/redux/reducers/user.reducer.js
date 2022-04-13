import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    userLoading : false,
    userData : null,
    error : null
}

export const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {
        joinRequest(state, action){state.userLoading = true, state.error = null}, // 처음엔 initialState, 이후 draft state로 진화
        joinSuccess(state, action){state.userLoading = true, state.error = action.payload},
        joinFailure(state, action){state.userLoading = true, state.error = action.payload},
        loginRequest(state, action){state.userLoading = true, state.error = null}
    }
})

export default userSlice.reducer