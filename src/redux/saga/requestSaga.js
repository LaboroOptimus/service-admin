import {call, put, takeEvery} from "@redux-saga/core/effects";
import fire from "../../config/Fire";


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
    /*try {
        const newData = yield call(() => {
                return fire.auth().signInWithEmailAndPassword(data.payload.email, data.payload.pass);
            }
        );
        yield put({type: 'LOGIN_SUCCESS', payload: 'success'});
    } catch (error) {
        let errorMessage = 'Произошла ошибка';
        if (error.code === 'auth/wrong-password') {
            errorMessage = 'Неверный пароль';
        } else if (error.code === 'auth/user-not-found') {
            errorMessage = 'Пользователь не найден';
        } else {
            errorMessage = 'Произошла ошибка, попробуйте еще раз';
        }
        yield put({type: 'LOGIN_ERROR', payload: errorMessage});
    }*/
}