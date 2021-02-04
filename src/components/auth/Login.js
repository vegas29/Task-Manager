import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Login = (props) => {

    //Extraer los valores del context alrtta

    const alertaContext = useContext(AlertaContext);
    const{alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, iniciarSesion} = authContext;
    //El caso de que el usuario o contrasena no exista
    useEffect(()=>{
         if(autenticado){
             props.history.push('/proyectos');
         }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        //eslint-disable-next-line
    }, [mensaje, autenticado, props.history ]);

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

      if(email.trim() === '' || password.trim() === ''){
          mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      }

      //Accion

      iniciarSesion({email, password});
  }
    return (
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) :null}
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