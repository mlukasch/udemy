import {ACTIONS} from "./actions";

const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.TEST:
            console.log("Reducer received : " + action.type);
            return state;
        default:
            return state;
    }
};
export default rootReducer;