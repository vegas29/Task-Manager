import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';
import Logo from '../../img/wave.svg';
const NuevaCuenta = (props) => {

    //Extraer los valores del context alrtta

    const alertaContext = useContext(AlertaContext);
    const{alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, registrarUsuario} = authContext;

    //En caso de que el usuario se haya aut o regi o sea un reg duplicado

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

      

        // Validar que no haya campos vacios
        if( nombre.trim() === '' || 
            email.trim() === '' || 
            password.trim() === '' || 
            confirmar.trim() === '' ) {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
            }

        // Password minimo de 6 caracteres
        if(password.length < 6) {
            mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }

        // Los 2 passwords son iguales
        if(password !== confirmar) {
            mostrarAlerta('Los passwords no son iguales', 'alerta-error');
            return;
        }

        //Accion
        registrarUsuario({
            nombre, 
            email, 
            password
        });


      
  }
    return (
        <div className="form-usuario">
            <img className="relative" src={Logo}/>
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) :null}
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
                            value="Registrarme"
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