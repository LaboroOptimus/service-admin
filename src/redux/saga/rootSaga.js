import {all, call, put, takeEvery} from 'redux-saga/effects';
import {watchLogin} from "./loginSaga";


export default function* rootSaga() {
    yield all([
        watchLogin()
    ])
}