import * as productConstants from '../constants/product'
import { toastError, toastSuccess } from '../helpers/toastHelper'

const initialState = {
    productList: []
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case productConstants.FETCH_PRODUCT: {
            return {
                ...state,
                productList: []
            }
        }
        case productConstants.FETCH_PRODUCT_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                productList: data
            }
        }
        case productConstants.FETCH_PRODUCT_FAILED: {
            console.log(1);
            const { error } = action.payload;
            toastError(error)
            console.log(2);
            return {
                ...state,
                productList: []
            }
        }
        case productConstants.FILTER_PRODUCT_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                productList: data
            }
        }
        case productConstants.DELETE_PRODUCT: {
            return {
                ...state
            }
        }
        case productConstants.DELETE_PRODUCT_SUCCESS: {
            const { id } = action.payload;
            var idString = String(id)
            toastSuccess('Xóa công việc thành công')
            return {
                ...state,
                productList: state.productList.filter(item => item.id !== idString)
            }
        }
        case productConstants.DELETE_PRODUCT_FAILED: {
            const { error } = action.payload;
            toastError(error)
            return {
                ...state
            }
        }
        case productConstants.ADD_PRODUCT: {
            return {
                ...state
            }
        }
        case productConstants.ADD_PRODUCT_SUCCESS: {
            const { product } = action.payload;
            toastSuccess('Thêm mới công việc thành công')
            return {
                ...state,
                productList: product.concat(state.productList)
            }
        }
        case productConstants.ADD_PRODUCT_FAILED: {
            const { error } = action.payload;
            toastError(error)
            return {
                ...state
            }
        }
        default: return state;
    }
}
export default reducer;