import {createSlice} from "@reduxjs/toolkit"

const initialState = {}
export const boardSlice = createSlice({
    name : 'boards',
    initialState,
    reducers : {
        addArticle : (state, action) => {
            alert('리듀서 내부로 들어온 board 데이터 : ' + JSON.stringify(action))
        }
    }
})

export const {addArticle} = boardSlice.actions
export default boardSlice.reducer