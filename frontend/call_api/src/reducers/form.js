import * as types from '../constants/form'
const initialState = {
    showForm: false
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_FORM: {
            return {
                ...state,
                showForm: true
            }
        }
        case types.HIDE_FORM: {
            return {
                ...state,
                showForm: false,
            }
        }
        default: return state;
    }
}
export default reducer;