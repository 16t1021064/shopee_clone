import * as productConstants from '../constants/product'

export const fetchProductList = () => {
    return {
        type: productConstants.FETCH_PRODUCT,

    }
}
export const fetchProductListSuccess = (data) => {
    return {
        type: productConstants.FETCH_PRODUCT_SUCCESS,
        payload: {
            data
        }
    }
}
export const fetchProductListFailed = (error) => {
    return {
        type: productConstants.FETCH_PRODUCT_FAILED,
        payload: {
            error
        }
    }
}