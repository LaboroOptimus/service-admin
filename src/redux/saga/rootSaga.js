import {all, call, put, takeEvery} from 'redux-saga/effects';
import {watchLogin} from "./loginSaga";
import {watchAddRequest} from "./requestSaga";


export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchAddRequest()
    ])
}