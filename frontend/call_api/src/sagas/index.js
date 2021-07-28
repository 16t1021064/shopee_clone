import { fork, call, take, put, delay, takeLatest } from 'redux-saga/effects'
import { getList, addProduct } from '../apis/product';
import * as productTypes from '../constants/product'
import { STATUS_CODE } from '../constants'
import { fetchProductListFailed, fetchProductListSuccess, fetchProductList, addProductSuccess, addProductFailed } from '../actions/product';
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
function* addProductSaga({ payload }) {
    const { product } = payload;
    const resp = yield call(addProduct, {
        name: product.name,
        rating: product.rating,
        price: product.price,
        photo: product.photo
    })
    const { data, status } = resp;
    if (status === STATUS_CODE.CREATED) {
        yield put(addProductSuccess(data))
    } else {
        yield put(addProductFailed(data))
    }
    yield delay(500);
}

function* rootSaga() {
    yield fork(fetchProductListAction);
    yield takeLatest(productTypes.FILTER_PRODUCT, filterProductSaga)
    yield takeLatest(productTypes.ADD_PRODUCT, addProductSaga)
}
export default rootSaga;