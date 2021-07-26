import * as productConstants from '../constants/product'
import { toastError } from '../helpers/toastHelper';

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
            const { error } = action.payload;
            toastError(error)
            return {
                ...state,
                productList: []
            }
        }
        default: return state;
    }
}
export default reducer;