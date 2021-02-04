import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import AlertaContext from '../../context/alertas/alertaContext';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const ListadoProyectos = () => {

    //Obtener los proyectos del initialState
    const proyectosContext = useContext(ProyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const {mensaje, alerta, mostrarAlerta} = alertaContext;

    //Obtener proyectos cuando carga el componente
    useEffect(()=>{
        //Para los errores
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        obtenerProyectos();

        //eslint-disable-next-line
    }, [mensaje]);

    //Se revisa si proyectos tiene contenido alguno
    if(proyectos.length ===0) return <p>No hay proyectos</p>;

    

    
    return ( 
        <ul className="listado-proyectos">
            {alerta ?(<div className="{`alerta ${alerta.categoria}`}">{alerta.msg}</div>) :null}
            <TransitionGroup>
            {proyectos.map(proyecto => (
                <CSSTransition
                key={proyecto._id}
                timeout={200}
                classNames="proyecto"
                >
                    <Proyecto
                    
                    proyecto={proyecto}
                />
                </CSSTransition>
            ))}
            </TransitionGroup>
        </ul>
    );
}
 
export default ListadoProyectos;