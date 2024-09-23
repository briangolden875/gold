import React, { useState } from "react";
const itemsData = [
    { nombre: 'Index', enlace: '/' },
    { nombre: 'Tradiciones', enlace: '/' },
    { nombre: 'Gastronomia', enlace: '/' },
    { nombre: 'Plato Bandera', enlace: '/' },
    { nombre: 'Contactenos', enlace: '/' },
    { nombre: 'Google', enlace: 'https://www.cibertec.edu.pe' }
]
const Menu = () => {
    const [elementos, setElementos] = useState([]);

    useState(() => {
        const menuItems = itemsData.map((elemento, index) => (
            <a
                key={index}
                href={elemento.enlace}
                className="item"
                target="_blank"
            >
                {elemento.nombre}
            </a>
        ));
        setElementos(menuItems);
    }, []);
return (
    <nav className="bloque">
        {elementos}
    </nav>
);
}
//renderizar


export default Menu;