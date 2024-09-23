import React, {useState, useEffect} from "react";
const Imagenes  =[
    "/img/ban1.jpg",
    "/img/ban2.jpg",
    "/img/ban3.jpg",
    "/img/ban4.jpg",
    "/img/ban5.jpg"
]
const Cabecera = () => {
    const [titulo, setTitulo] = useState ("");
    const [imgcab, setImgcab] = useState ("/img/ban1.jpg");

    useEffect(()=>{
        const intervalo =setInterval (()=>{
            const randomIndex = Math.floor(Math.random()*Imagenes.length);
            setTitulo ("Consultenos");
            setImgcab(Imagenes[randomIndex]);
                },1000);
                return ()=> clearInterval(intervalo);
    },[]);
    return(
        <header className="bloque">
            <h1 className="h1cab">{titulo}</h1>
            <img className="imgcab" src={imgcab} alt={titulo}/>
        </header>
    )
}
export default Cabecera;

