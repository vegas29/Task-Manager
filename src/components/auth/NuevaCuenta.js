import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {

//State para iniciar sesion

  const [usuario, guardarUsuario] = useState({
    nombre:'', 
    email: '',
    password: '',
    confirmar:''
  });

  //Extraer de usuario
  const {nombre, email, password, confirmar} = usuario;

  const onChange = e => {
      guardarUsuario({
          ...usuario,
          [e.target.name] : e.target.value
      })

  }  


  //Cuando el usuario quiere iniciar sesion

  const onSubmit = e => {
      e.preventDefault();

      //Validacion

      //Password minimos de 6 caracteres

      //Passwords iguales

      //

      //Accion
  }
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Registrarse</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre del usuario</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Correo</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu correo"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu contraseña"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Contraseña</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Tu confirmacion contraseña"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Registrarme"
                        />
                    </div>    
                </form>


                <Link to={'/'} className="enlace-cuenta">
                    Iniciar sesión
                </Link>
            </div>
            
        </div>
    );
}
 
export default NuevaCuenta;