export const allColors = async () => {
    try {
        const res = await fetch('http://localhost:3060/colors'); // GET
        const colors = await res.json();
        return colors;
    } catch(err) {
        // handle the error
    }
};

export const oneColor = async (colorId) => {
    try {
        const res = await fetch(`http://localhost:3060/colors/${encodeURIComponent(colorId)}`); // GET
        const color = await res.json();
        return color;
    } catch(err) {
        // handle the error
    }
};        

export const appendColor = async (newColor) => {
    try {
        const res = await fetch(`http://localhost:3060/colors`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newColor),
        });
        const color = await res.json();
        return color;
    } catch(err) {
        // handle the error
    }
}; 

export const replaceColor = async (color) => {
    try {
        await fetch(`http://localhost:3060/colors/${encodeURIComponent(color.id)}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(color),
        });
    } catch(err) {
        // handle the error
    }
}; 

export const removeColor = async (colorId) => {
    try {
        await fetch(`http://localhost:3060/colors/${encodeURIComponent(colorId)}`, {
            method: 'DELETE',
        });
    } catch(err) {
        // handle the error
    }
}; 
