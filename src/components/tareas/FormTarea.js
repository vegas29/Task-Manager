import React, {useContext, useState, useEffect} from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';

const FormTarea = () => {


    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext);
    const {proyecto} = proyectosContext;

    //Ovtener la funcion del context de la tarea
    const tareasContext = useContext(TareaContext);
    const {tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea} = tareasContext;


    //Effect que detecta la tarea

    useEffect(()=>{
        if(tareaseleccionada !== null){
            guardarTarea(tareaseleccionada)
        }else{
            guardarTarea({
                nombre:''
            })
        }
    }, [tareaseleccionada]);
    //State del formulario

    const [tarea, guardarTarea] = useState({
        nombre:''
    })

    //Extraer el nombre dle proyecto

    const { nombre } = tarea;

    //Si no hay proyecto seleccionado
    if(!proyecto) return null;


    //Extraer el proyecto actual

    const [proyectoActual] = proyecto;

    //Leer los valores del formulario

    const handleChange = e =>{
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //Validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        //Si es edicion o si es nueva tarea
        if(tareaseleccionada === null){
            //tarea nueva
            //Agregar la nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        }else{
            //actualizar tarea existente
            actualizarTarea(tarea);

            //Elimina tarea seleccionada del state
            limpiarTarea();
        }

        //Pasar la validación

        

         //Obtener las tareas y filtrarlas
        obtenerTareas(proyectoActual.id);
        

        //Reiniciar el form

        guardarTarea({
            nombre:''
        })

       

    }


    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="cotenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="cotenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>

            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p>: null }
        </div>
    );
}
 
export default FormTarea;