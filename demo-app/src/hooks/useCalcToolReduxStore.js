import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { createAddAction, createSubtractAction } from "../actions/calcToolActions";

export const useCalcToolReduxStore = () => {

    const result = useSelector(state => state.result);

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
    }, dispatch);


    return {
        ...boundActions,
        result,
    };

};