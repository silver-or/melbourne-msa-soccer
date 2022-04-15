import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { todoActions } from '../reducers/todoReducer'
import { postTodo } from '../api/todoApi'

interface TodoAddType{
    type: string;
    payload: {
        userid: string, task: string, complete: string
    }
}

interface TodoAddSuccessType{
    type: string;
    payload: {
        userid: string
    }
}

function* addTask(task: TodoAddType){
    try{
        alert('진행 3: saga내부 join 성공'+ JSON.stringify(task))
        const response : TodoAddSuccessType = yield postTodo(task.payload)
        yield put(todoActions.addTaskSuccess(response))
    } catch(error){
        alert('진행 3: saga내부 join 실패')
        yield put(todoActions.addTaskFailure(error))
    }
}

export function* watchAddTask(){
    yield takeLatest(todoActions.addTaskRequest, addTask)
}