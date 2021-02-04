import React,{useContext} from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';


const Proyecto = ({proyecto}) => {

    //Obtener el state del poryectos

    const proyectosContext = useContext(ProyectoContext)
    const { proyectoActual} = proyectosContext;

    //Obtener la funcion del contex de tarea

    const tareasContext = useContext(TareaContext);
    const { obtenerTareas } = tareasContext;

    //Funcion para agregar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id); //Fijar proyecto actual
        obtenerTareas(id); //Filtrar las tareas

    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => seleccionarProyecto(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
    );
}
 
export default Proyecto;