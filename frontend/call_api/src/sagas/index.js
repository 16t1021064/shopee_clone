import { fork, call, take, put, delay } from 'redux-saga/effects'
import { getList } from '../apis/product';
import * as productTypes from '../constants/product'
import { STATUS_CODE } from '../constants'
import { fetchProductListFailed, fetchProductListSuccess } from '../actions/product';
function* fetchProductListAction() {
    while (true) {
        yield take(productTypes.FETCH_PRODUCT);
        const resp = yield call(getList);
        const { status, data } = resp;
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchProductListSuccess(data));
        } else {
            yield put(fetchProductListFailed(data));
        }
        yield delay(500)
    }
}
function* rootSaga() {
    yield fork(fetchProductListAction);
}
export default rootSaga;