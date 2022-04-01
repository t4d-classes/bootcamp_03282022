import { useColorToolStoreContext } from '../contexts/colorToolStoreContext';
import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';



export function ColorTool() {

    const { 
        colors, showHexcode, sortColorsAsc,
        sortColorsDesc, toggleHexcode, appendColor,
    } = useColorToolStoreContext();


    return (
        <>
            <ToolHeader headerText='Color Tool' />
            <ColorList colors={colors}
                showHexcode={showHexcode}
                onSortAsc={sortColorsAsc}
                onSortDesc={sortColorsDesc}
                onToggleHexcode={toggleHexcode} />
            <ColorForm buttonText="Add Color"
                onSubmitColor={appendColor} />
        </>
    );

}