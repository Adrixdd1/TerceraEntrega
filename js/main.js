import { Proyecto } from "./Proyecto.js";
import { Ubicacion } from "./Ubicacion.js";
let proyectos=JSON.parse(localStorage.getItem("proyectos"));

$(document).ready(function() {
    // Capturar cambios en el campo de modalidad para mostrar u ocultar la ubicación
    $('#modalidad').on('change', function() {
        $('#ubicacionContainer').toggle($(this).val() != '0');
    });

    // Guardar información del proyecto mientras se llena el formulario
    $('#nuevoProyecto').on('input', function() {
        let proyecto = new Proyecto(
            $('#nombre').val(),
            $('#descripcion').val(),
            $('#modalidad').val(),
            $('#remuneracion').is(':checked'),
            new Ubicacion(
                $('#ciudad').val(),
                $('#estado').val()
            )
        );
        localStorage.setItem('proyecto', JSON.stringify(proyecto));
    });

    // Enviar el formulario y borrar la información guardada
    $('#nuevoProyecto').on('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario
        let proyecto = JSON.parse(localStorage.getItem('proyecto'));
        // Aquí puedes enviar 'proyecto' al servidor
        console.log('Proyecto enviado:', proyecto);
        localStorage.removeItem('proyecto'); // Borrar información guardada

        proyecto=new Proyecto(proyecto.nombre,proyecto.descripcion,proyecto.modalidad,proyecto.remuneracion,proyecto.ubicacion,1);

        if(!proyectos){
            proyectos=[];
        }
        proyectos.push(proyecto);
        localStorage.setItem("proyectos",JSON.stringify(proyectos));

        window.location.href = 'index.html';
    });

    // Cargar información del proyecto si existe en el almacenamiento local
    const proyectoGuardado = JSON.parse(localStorage.getItem('proyecto'));
    if (proyectoGuardado) {
        $('#nombre').val(proyectoGuardado.nombre);
        $('#titulo').html(proyectoGuardado.nombre);
        $('#descripcion').val(proyectoGuardado.descripcion);
        $('#modalidad').val(proyectoGuardado.modalidad);
        $('#remuneracion').prop('checked', proyectoGuardado.remuneracion);
        if (proyectoGuardado.modalidad == '1') {
            $('#ubicacionContainer').show();
            $('#ciudad').val(proyectoGuardado.ubicacion.ciudad);
            $('#estado').val(proyectoGuardado.ubicacion.estado);
        }
    }
});
