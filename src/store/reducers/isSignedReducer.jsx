import { EDIT_IS_SIGNED } from "../../utils/constants";
import { editIsSigned } from "../actions/actions";

export const isSignedReducer = (state = editIsSigned.playload, action = editIsSigned) => {
    switch (action.type) {
        case EDIT_IS_SIGNED: {
          return action.playload
        }
        default:
          return state
      }
}