import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import {
    createAddAction, createSubtractAction,
    createMultiplyAction, createDivideAction,
    createClearAction,
} from "../actions/calcToolActions";

export const useCalcToolReduxStore = () => {

    const result = useSelector(state => state.result);
    const history = useSelector(state => state.history);

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
    }, dispatch);


    return {
        ...boundActions,
        result,
        history,
    };

};