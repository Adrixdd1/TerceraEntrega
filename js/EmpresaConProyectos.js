import { Empresa } from "./Empresa";

// Definición de la clase EmpresaConProyectos que hereda de Empresa
class EmpresaConProyectos extends Empresa {
    constructor(idEmpresa, nombre, ocupacionPrincipal, descripcion, contacto, paginaWeb) {
        super(idEmpresa, nombre, ocupacionPrincipal, descripcion, contacto, paginaWeb);
        this.proyectos = [];
    }
}