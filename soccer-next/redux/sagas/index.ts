import { all } from 'redux-saga/effects';
import { watchJoin, watchLogin } from "./userSaga";
import { watchAddTask } from "./todoSaga";

export default function* rootSaga() {
    yield all([watchJoin(), watchAddTask(),watchLogin()])
}