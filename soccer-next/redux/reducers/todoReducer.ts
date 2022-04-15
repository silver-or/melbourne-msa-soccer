import {createSlice} from "@reduxjs/toolkit"

export interface TodoType{
    userid: string;
    task: string;
    complete: string; // value is T, F
}

// state
export interface TodoState{
    loading: boolean;
    data: TodoType[];
    error: any;
}

const initialState: TodoState = {
    loading: false,
    data: [],
    error: null
}

export const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
        addTaskRequest(state: TodoState, payload){
            alert('진행 2 : 리듀서 내부')
            state.loading = true
        },
        addTaskSuccess(state: TodoState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;
        },
        addTaskFailure(state: TodoState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;
        }
    }
})

const {reducer, actions} = todoSlice

export const todoActions = actions

export default reducer