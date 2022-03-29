import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";

export function CarTool(props) {

    return (
        <>
            <ToolHeader headerText="Car Tool" />
            <CarTable cars={props.cars} />
        </>
    );

}