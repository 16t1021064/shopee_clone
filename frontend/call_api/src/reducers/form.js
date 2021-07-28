import * as types from '../constants/form'
const initialState = {
    showForm: false,
    title: ''
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
                title: ''
            }
        }
        case types.CHANGE_FORM_TITLE: {
            return {
                ...state,
                title: action.payload.title
            }
        }
        default: return state;
    }
}
export default reducer;