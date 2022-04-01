import { useSortedList } from '../hooks/useSortedList';
import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';


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

};

export function ColorTool(props) {

    // ... is the array spread operator used to copy items from
    // props.colors into a new array that the component owns
    const [
        colors,, appendColor,,,
        sortColorsAsc, sortColorsDesc,
    ] = useSortedList(sortByColorName, [...props.colors]);

    return (
        <>
            <ToolHeader headerText='Color Tool' />
            <ColorList colors={colors}
                onSortAsc={sortColorsAsc}
                onSortDesc={sortColorsDesc} />
            <ColorForm buttonText="Add Color"
                onSubmitColor={appendColor} />
        </>
    );

}