import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const ListadoProyectos = () => {

    //Obtener los proyectos del initialState
    const proyectosContext = useContext(ProyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    //Obtener proyectos cuando carga el componente
    useEffect(()=>{
        obtenerProyectos();

        //eslint-disable-next-line
    }, []);

    //Se revisa si proyectos tiene contenido alguno
    if(proyectos.length ===0) return <p>No hay proyectos</p>;

    

    
    return ( 
        <ul className="listado-proyectos">
            <TransitionGroup>
            {proyectos.map(proyecto => (
                <CSSTransition
                key={proyecto.id}
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