import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

//State para iniciar sesion

  const [usuario, guardarUsuario] = useState({
      email: '',
      password: ''
  });

  //Extraer de usuario
  const {email, password} = usuario;

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

      //Accion
  }
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>
                <form
                    onSubmit={onSubmit}
                >
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
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesion"
                        />
                    </div>    
                </form>


                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Registrarse
                </Link>
            </div>
            
        </div>
    );
}
 
export default Login;