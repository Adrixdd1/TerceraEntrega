// Obtener proyectos del localStorage
const proyectos = JSON.parse(localStorage.getItem('proyectos')) || [];

// Función para mostrar los proyectos en la página
// Función para mostrar los proyectos en la página
function mostrarProyectos() {
    const proyectosContainer = $('#proyectosContainer');

    // Limpiar el contenido previo
    proyectosContainer.empty();

    // Mostrar solo los proyectos con estado "Sin enviar"
    proyectos.forEach((proyecto, index) => {
        if (proyecto.estadoDelProyecto === 0) { // Solo proyectos "Sin enviar"
            const estado = obtenerEstado(proyecto.estadoDelProyecto);
            const proyectoDiv = $(`
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${proyecto.nombre}</h5>
                        <p class="card-text">Estado: ${estado}</p>
                        <button class="btn btn-primary" onclick="continuarEdicion(${index})">Continuar edición</button>
                    </div>
                </div>
            `);
            proyectosContainer.append(proyectoDiv);
        }else{
            const estado = obtenerEstado(proyecto.estadoDelProyecto);
            const proyectoDiv = $(`
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${proyecto.nombre}</h5>
                        <p class="card-text">Estado: ${estado}</p>
                    </div>
                </div>
            `);
            proyectosContainer.append(proyectoDiv);
        }
    });
}

// Función para continuar la edición de un proyecto específico
function continuarEdicion(index) {
    // Guardar el proyecto seleccionado en el localStorage como "proyecto"
    localStorage.setItem('proyecto', JSON.stringify(proyectos[index]));
    // Redirigir a la página de nuevoProyecto.html
    window.location.href = 'nuevoProyecto.html';
}

// Función para obtener el nombre del estado según su código
function obtenerEstado(codigoEstado) {
    switch (codigoEstado) {
        case 0:
            return 'Sin enviar';
        case 1:
            return 'En revisión';
        case 2:
            return 'Publicado';
        case 3:
            return 'Comenzado';
        case 4:
            return 'Terminado';
        default:
            return 'Desconocido';
    }
}

// Mostrar los proyectos al cargar la página
$(document).ready(function() {
    mostrarProyectos();
});
/*// Obtener proyectos del localStorage
const proyectos = JSON.parse(localStorage.getItem('proyectos')) || [];

// Función para mostrar los proyectos en la página
function mostrarProyectos() {
    const proyectosContainer = $('#proyectosContainer');

    // Limpiar el contenido previo
    proyectosContainer.empty();

    // Crear y agregar elementos HTML para cada proyecto
    proyectos.forEach(proyecto => {
        const estado = obtenerEstado(proyecto.estado);
        const proyectoDiv = $(`
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${proyecto.nombre}</h5>
                    <p class="card-text">Estado: ${estado}</p>
                </div>
            </div>
        `);
        proyectosContainer.append(proyectoDiv);
    });
}

// Función para obtener el nombre del estado según su código
function obtenerEstado(codigoEstado) {
    switch (codigoEstado) {
        case 0:
            return 'Sin enviar';
        case 1:
            return 'En revisión';
        case 2:
            return 'Publicado';
        case 3:
            return 'Comenzado';
        case 4:
            return 'Terminado';
        default:
            return 'Desconocido';
    }
}

// Mostrar los proyectos al cargar la página
$(document).ready(function() {
    mostrarProyectos();
});*/