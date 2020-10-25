import {all, call, put, takeEvery} from 'redux-saga/effects';
import fire from "../../config/Fire";

export function* watchLogin() {
    console.log('САГА 1');
    yield takeEvery('LOGIN', workerLogin);
}

export function * workerLogin(data) {
    try {
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
    }
}
