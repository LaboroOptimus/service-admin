import {all} from 'redux-saga/effects';
import {watchLogin} from "./loginSaga";
import {watchAddRequest, watchLoadRequests, watchDeleteRequest, watchChangeStatus} from "./requestSaga";


export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchAddRequest(),
        watchLoadRequests(),
        watchDeleteRequest(),
        watchChangeStatus(),
    ])
}