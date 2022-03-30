import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export function ColorTool(props) {

    return (
        <>
            <ToolHeader headerText='Color Tool' />
            <ColorList colors={props.colors} />
            <ColorForm />
        </>
    );

}