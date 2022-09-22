
import { ActionTypes } from '../constant/action-types'
const initialState = {
    products: []
};
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
    }
}
export const selectedProductReducer = (state={}, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...action.payload};
        default:
            return state;
    }
}