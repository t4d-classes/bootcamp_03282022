import { createContext, useContext } from "react";
import { useColorToolStore } from "../hooks/useColorToolStore";

const colorToolStoreContext = createContext();

const colorList = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
];

// put data on the context
export const ColorToolStoreProvider = (props) => {

    return (
        <colorToolStoreContext.Provider value={useColorToolStore([...colorList])}>
            {props.children}
        </colorToolStoreContext.Provider>
    );

};

// get data off the context
export const useColorToolStoreContext = () => {
    return useContext(colorToolStoreContext);
};


