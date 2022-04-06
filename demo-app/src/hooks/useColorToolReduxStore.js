import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import {
    createAppendAction, createRemoveAction, createSortAction, createToggleHexcodeAction
} from "../actions/colorToolActions";

const sortByColorName = (sortDir) => (a,b) => {

    const alc = String(a.name).toLowerCase();
    const blc = String(b.name).toLowerCase();

    if (blc < alc) {
        return (sortDir === 'asc') ? 1 : -1;
    } else if (blc > alc) {
        return (sortDir === 'asc') ? -1 : 1;
    } else {
        return 0;
    }

}


export const useColorToolReduxStore = () => {

    const colors = useSelector(state => {
        return [ ...state.colors ].sort(sortByColorName(state.sortDir));
    });
    const showHexcode = useSelector(state => state.showHexcode);

    const dispatch = useDispatch();

    const boundActions = bindActionCreators({
        appendColor: createAppendAction,
        removeColor: createRemoveAction,
        sortColors: createSortAction,
        toggleHexcode: createToggleHexcodeAction,
    }, dispatch);


    return {
        appendColor: boundActions.appendColor,
        removeColor: boundActions.removeColor,
        sortColorsAsc: () => boundActions.sortColors('asc'),
        sortColorsDesc: () => boundActions.sortColors('desc'),
        toggleHexcode: boundActions.toggleHexcode,
        colors,
        showHexcode,
    };

};