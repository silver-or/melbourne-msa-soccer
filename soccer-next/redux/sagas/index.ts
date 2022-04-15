import { all } from 'redux-saga/effects';
import { watchAddTask } from './todoSaga';
import { watchJoin } from "./userSaga";

export default function* rootSaga() {
    yield all([watchJoin(), watchAddTask()]);
}