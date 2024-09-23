import React,{useState} from "react";
import Join from "./Join";
function FormularioRegistro() {
    const [tipos, setTipos] = useState('');

    const [ registrado, setRegistrado]= useState(false);

    const handleSubmit = (event)=> {
        event.preventDefault();
        alert('Gracias Totales');
        setRegistrado(true);
    }
    return (
        <div className="container">
            {registrado ? (
                <Join></Join>
            ):(
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="inombre">nombre</label>
                    <input 
                    type= "text"
                    className="form-control"
                    id="inombre"
                    name="nombre"
                    placeholder="Ingrese nombre"/>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="iapellido">Apellido</label>
                    <input 
                    type= "text"
                    className="form-control"
                    id="iapellido"
                    name="apellido"
                    placeholder="Ingrese Apellido"/>
                    
                </div>
                <div className="form-group">
                    <label  htmlFor="itipo">Tipo</label>
                    <select
                    className="form-control"
                    id="itipo"
                    name="tipos"
                    value={tipos}
                    onChange={(e)=>setTipos(e.target.value)}
                    
                    >
                        <option value='1'>Jalado</option>
                        <option value='2'>Recontra Jalado</option>
                        <option value='3'>Nos vemos el otro ciclo</option>
                    </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="iarea">observaciones:</label>
                        <textarea className="form-control" id="iarea" rows={3}></textarea>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="ibecado" name="becado"/>
                        <label htmlFor="ibecado" className="form-check-label">
                            ¿Jalado?
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Registrar
                    </button>
                    <p>{tipos}</p>
                    </form>
            )}
        </div>
    )
}
export default FormularioRegistro;