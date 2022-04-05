import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import {
    createAddAction, createSubtractAction,
    createMultiplyAction, createDivideAction,
    createClearAction, createDeleteHistoryEntryAction,
    ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION
} from "../actions/calcToolActions";

export const useCalcToolReduxStore = () => {

    // const result = useSelector(state => {

    //     let result = 0;

    //     state.history.forEach(entry => {
    //         switch (entry.opName) {
    //             case ADD_ACTION:
    //                 result += entry.opValue;
    //                 break;
    //             case SUBTRACT_ACTION:
    //                 result -= entry.opValue;
    //                 break;
    //             case MULTIPLY_ACTION:
    //                 result *= entry.opValue;
    //                 break;
    //             case DIVIDE_ACTION:
    //                 result /= entry.opValue;
    //                 break;
    //             default:
    //                 break;
    //         }
    //     });

    //     return result;

    // });

    const result = useSelector(state =>
        state.history.reduce((result, entry) => {
            switch (entry.opName) {
                case ADD_ACTION:
                    return result + entry.opValue;
                case SUBTRACT_ACTION:
                    return result - entry.opValue;
                case MULTIPLY_ACTION:
                    return result * entry.opValue;
                case DIVIDE_ACTION:
                    return result / entry.opValue;
                default:
                    return result;
            }
        }, 0));


    const history = useSelector(state => state.history);
    const errorMessage = useSelector(state => state.errorMessage);

    const dispatch = useDispatch();

    /*
    const boundActions = {
        // dispatches the action into the store so the reducer will run
        // and update the state data and trigger a re-render
        add: (value) => dispatch(createAddAction(value)),
        subtract: (value) => dispatch(createSubtractAction(value)),
    };
    */

    const boundActions = bindActionCreators({
        add: createAddAction,
        subtract: createSubtractAction,
        multiply: createMultiplyAction,
        divide: createDivideAction,
        clear: createClearAction,
        deleteHistoryEntry: createDeleteHistoryEntryAction,
    }, dispatch);


    return {
        ...boundActions,
        result,
        history,
        errorMessage,
    };

};