class Codigo {
  constructor(lenguajeDeProgramacion, codigo) {
    this.LenguajeDeProgramacion = lenguajeDeProgramacion;
    this.Codigo = codigo;
  }

  static cargarDesdeJson(json) { 
    //console.log(json);
    const ej = new Codigo(
    json.LenguajeDeProgramacion,
    json.Codigo
  );
  return ej;
  }
  escapeHTML() {
  return this.Codigo.replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;')
             .replace(/"/g, '&quot;');
  }

}