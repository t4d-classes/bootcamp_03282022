import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';

export function ColorTool(props) {

    return (
        <>
            <ToolHeader headerText='Color Tool' />
            <ColorList colors={props.colors} />
        </>
    );

}