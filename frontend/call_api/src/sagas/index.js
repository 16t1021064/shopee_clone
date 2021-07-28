import { fork, call, take, put, delay, takeLatest } from 'redux-saga/effects'
import { getList } from '../apis/product';
import * as productTypes from '../constants/product'
import { STATUS_CODE } from '../constants'
import { fetchProductListFailed, fetchProductListSuccess, fetchProductList } from '../actions/product';
function* fetchProductListAction() {
    while (true) {
        const action = yield take(productTypes.FETCH_PRODUCT);
        const { params } = action.payload;
        const resp = yield call(getList, params);
        const { status, data } = resp;
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchProductListSuccess(data));
        } else {
            yield put(fetchProductListFailed(data));
        }
        yield delay(500)
    }
}
function* filterProductSaga({ payload }) {
    yield delay(500);
    const { keyword } = payload;
    yield put(fetchProductList({ q: keyword }));
}
function* rootSaga() {
    yield fork(fetchProductListAction);
    yield takeLatest(productTypes.FILTER_PRODUCT, filterProductSaga)
}
export default rootSaga;