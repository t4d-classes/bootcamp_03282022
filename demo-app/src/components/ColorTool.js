import { useColorToolStoreContext } from '../contexts/colorToolStoreContext';
import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';



export function ColorTool() {

    const { 
        colors, appendColor,
    } = useColorToolStoreContext();


    return (
        <>
            <ToolHeader headerText='Color Tool' />
            <ColorList colors={colors} />
            <ColorForm buttonText="Add Color"
                onSubmitColor={appendColor} />
        </>
    );

}