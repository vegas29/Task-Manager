import React, {useContext} from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';
const Tarea = ({tarea}) => {

    //Extrar si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext);
    const {proyecto} = proyectosContext;

    //Obtener la funcion del context de una tarea
    const tareasContext = useContext(TareaContext);
    const {eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual} = tareasContext;

    //Extraer el proyecto

    const[proyectoActual] = proyecto;

    //Funcion que se ejecuta cuando el usuario presiona el boton de eliminar
    const tareaEliminar = id => {
        eliminarTarea(id);
    const[proyectoActual] = proyecto;
        obtenerTareas(proyectoActual.id)
    }

    //Funcion que modifica el estado de las tareas

    const cambiarEstado = tarea => {
        if(tarea.estado){
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
    }

    //Agrega una tarea actual para editar

    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }

    return (

        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado
                ?
                 (
                     <button
                     type="button"
                     className="completo"
                     onClick={() => {cambiarEstado(tarea)}}
                     >Completo</button>
                 )
            
                :
                (
                    <button
                    type="button"
                    className="incompleto"
                    onClick={() => {cambiarEstado(tarea)}}
                    >Incompleto</button>
                )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccionarTarea(tarea)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={()=> tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
    );
}
 
export default Tarea;