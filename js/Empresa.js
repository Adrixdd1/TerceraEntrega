
export class Empresa {
    constructor(idEmpresa, nombre, ocupacionPrincipal, descripcion, contacto, paginaWeb) {
        this._idEmpresa = idEmpresa;//int
        this._nombre = nombre;//String
        this._ocupacionPrincipal = ocupacionPrincipal;//String
        this._descripcion = descripcion;//String
        this._contacto = contacto;//String
        this._paginaWeb = paginaWeb;//String
    }
    get idEmpresa() {
        return this._idEmpresa;
    }
    set idEmpresa(in_idEmpresa) {
        this._idEmpresa = in_idEmpresa;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(in_nombre) {
        this._nombre = in_nombre;
    }

    get ocupacionPrincipal() {
        return this._ocupacionPrincipal;
    }
    set ocupacionPrincipal(in_ocupacionPrincipal) {
        this._ocupacionPrincipal = in_ocupacionPrincipal;
    }

    get descripcion() {
        return this._descripcion;
    }
    set descripcion(in_descripcion) {
        this._descripcion = in_descripcion;
    }

    get contacto() {
        return this._contacto;
    }
    set contacto(in_contacto) {
        this._contacto = in_contacto;
    }

    get paginaWeb() {
        return this._paginaWeb;
    }
    set paginaWeb(in_paginaWeb) {
        this._paginaWeb = in_paginaWeb;
    }


    
}