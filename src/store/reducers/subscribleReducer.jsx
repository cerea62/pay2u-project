import { SET_COUNT_SUBSCRIBLE } from '../../utils/constants';

export const subscribleReducer = (state, action) => {
    console.log("reduce", state, action);
    switch (action.type) {
        case SET_COUNT_SUBSCRIBLE:
            return {
                isSigned: false,
            };
        default: return state;
    }
}