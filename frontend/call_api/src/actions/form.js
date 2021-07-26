import * as formConstants from '../constants/form'

export const showForm = () => {
    return {
        type: formConstants.SHOW_FORM
    }
}
export const hideForm = () => {
    return {
        type: formConstants.HIDE_FORM
    }
}
export const changeFormTitle = (title) => {
    return {
        type: formConstants.CHANGE_FORM_TITLE,
        payload: {
            title
        }
    }
}
export const changeFormContent = (component) => {
    return {
        type: formConstants.CHANGE_FORM_CONTENT,
        payload: {
            component
        }
    }
}