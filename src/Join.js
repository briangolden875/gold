import React, { useState } from "react";
import FormularioRegistro from "./FormularioRegistro";
//Definir la lista de usuarios y contraseñas
const usuarios = [
    { nombreUsuario: 'usuario1', contraseña: 'contraseña1' },
    { nombreUsuario: 'usuario2', contraseña: 'contraseña2' },
    { nombreUsuario: 'usuario3', contraseña: 'contraseña3' },
    { nombreUsuario: 'usuario4', contraseña: 'contraseña4' },
    { nombreUsuario: 'usuario5', contraseña: 'contraseña5' }
]

let intento = 0
const Join = () => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [mostrarRegistro, setMostrarRegistro] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.nombreUsuario === nombreUsuario && usuario.contraseña === contraseña
        )
        if (usuarioEncontrado) {
            alert(`!Bienvenido, ${usuarioEncontrado.nombreUsuario}`);
        }
        else {
            alert(`El usuario no existe, por favor competa el formulario de registro`);
            setMostrarRegistro(true);
        }
    }
    return (
        <div className="container">
            {!mostrarRegistro ? (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="icorreo">Nombre de Usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            id="icorreo"
                            name="nombreUsuario"
                            placeholder="Ingrese nombre de usuario"
                            value={nombreUsuario}
                            onChange={(e) => setNombreUsuario(e.target.value)}
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="ipassword">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="ipassword"
                            name="Contraseña"
                            placeholder="Ingrese contraseña"
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                        />

                    </div>
                    <button type="submit" className="btn btn-primary">
                        Ingresar
                    </button>
                </form>
            ) : (
                <FormularioRegistro></FormularioRegistro>
            )}
        </div>
    )

}
export default Join;



