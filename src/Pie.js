import React from "react";


const imgRedes = [
    "img/twitter.jpg",
    "img/face.jpg",
    "img/instagram.jpg"
]

const listaOpciones= [
    {text : 'Index' , ruta: "/"},
    {text : 'Tradiciones' , ruta: "/"},
    {text : 'Costumbres' , ruta: "/"},
    {text : 'Platos Tipicos' , ruta: "/"},
    {text : 'Restaurantes' , ruta: "/"},
    {text : 'Museos y parques' , ruta: "/"},
    {text : 'Calendario' , ruta: "/"},
    {text : 'Contactenos' , ruta: "/"}
]
function Pie(){
    const handleMouseEnter =(event) =>{
       event.target.style.transform = 'rotate(180deg)';
        event.target.style.transition = 'All 1s'
    }
    const handleMouseLeave =(event) => {
        event.target.style.transform = 'rotate(0)';
        event.target.style.transition = 'All 1s'
    }

    const redesSociales = imgRedes.map((ruta,index)=>(
        <img 
        key = {index}
        className="img-rs"
        src = {ruta}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        alt= {`Red social ${index}`}/>
        
    ));
    const opcionesPie = listaOpciones.map((opcion, index) =>(
        <li key={index} className="li-footer">
            <a href= {opcion.ruta}>{opcion.text}</a></li>    ));
            return (
                <div>
                    <nav className="div-footer">
                        <ul>{opcionesPie}</ul>
                    </nav>
                    <article className="div-footer">
                        <h3>Siguenos en:</h3>
                        {redesSociales}
                    </article>
                </div>
            )

}
export default Pie;