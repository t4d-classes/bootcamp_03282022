import { useList } from '../hooks/useList';
import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export function ColorTool(props) {

    // ... is the array spread operator used to copy items from
    // props.colors into a new array that the component owns
    const [ colors, appendColor ] = useList([...props.colors]);

    return (
        <>
            <ToolHeader headerText='Color Tool' />
            <ColorList colors={colors} />
            <ColorForm buttonText="Add Color"
                onSubmitColor={appendColor} />
        </>
    );

}