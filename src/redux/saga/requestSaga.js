import {call, put, takeEvery} from "@redux-saga/core/effects";
import fire from "../../config/Fire";
import {getStatusForServer} from '../../utils/status';

export function * watchLoadRequests() {
    yield takeEvery('LOAD_REQUESTS', workerLoadRequests);
}

export function * workerLoadRequests() {
    let ref = fire.database().ref().child('requests/');
    let data = {};
    let keys = [];
    try {
        yield call(() => {
            return ref.once('value').then(function (snapshot) {
                keys = Object.keys(snapshot.val());
                data = snapshot.val();
            })
        });
        let formatData = [];
        for(let i = 0; i < keys.length; i++){
            formatData.push(data[keys[i]]);
        }
        yield put({type: 'LOAD_SUCCESS', payload: formatData});
    }
    catch (e) {
        yield put({type: 'LOAD_ERROR', payload: e.code})
    }
}



export function* watchAddRequest() {
    yield takeEvery('ADD_REQUEST', workerAddRequest);
}

export function * workerAddRequest(data) {
    try {
        yield call(() => {
                return fire.database().ref('requests/').push({
                    id: data.payload.id,
                    name: data.payload.name,
                    customer: data.payload.customer,
                    date: data.payload.date,
                    status: data.payload.status,
                });
            }
        );
        yield put({type: 'ADD_SUCCESS'});
    } catch (e) {
        yield put({type: 'ADD_ERROR', payload: e.code});
    }
}

export function* watchDeleteRequest() {
    yield takeEvery('DELETE_REQUEST', workerDeleteRequest);
}

export function * workerDeleteRequest(data) {
    try {
        yield call(() => {
                return fire.database().ref('requests/').orderByChild('id').equalTo(data.payload).once('value').then(function (snapshot) {
                    snapshot.forEach(function (child) {
                        child.ref.remove();
                    })
                })
            }
        );
        yield put({type: 'DELETE_SUCCESS'});
    } catch (e) {
        yield put({type: 'DELETE_ERROR', payload: e.code});
    }
}

export function* watchChangeStatus() {
    yield takeEvery('CHANGE_STATUS', workerChangeStatus);
}

export function * workerChangeStatus(data) {

    try {
        yield call(() => {
                return fire.database().ref('requests/').orderByChild('id').equalTo(data.payload.id).once('value').then(function (snapshot) {
                    snapshot.forEach(function (child) {
                        child.ref.update({
                            status: getStatusForServer(data.payload.status),
                        });
                    })
                })
            }
        );
        yield put({type: 'CHANGE_STATUS_SUCCESS'});
    } catch (e) {
        yield put({type: 'CHANGE_STATUS_ERROR', payload: e.code});
    }
}