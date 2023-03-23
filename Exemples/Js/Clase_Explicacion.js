class Explicacion {
    constructor(titulo, codigo, descripcion) {
      this.Titulo = titulo;      
      this.Codigo = codigo;
      this.Descripcion = descripcion;
      
    }
  
    toBootstrapHtml() {
      return `
        <div class="card">
          <div class="card-header">${this.Titulo}</div>
          <div class="card-body">
            <p class="card-text">${this.Descripcion}</p>
            <pre><code id="${this.Codigo.LenguajeDeProgramacion.toLowerCase()}2" class="mycode language-${this.Codigo.LenguajeDeProgramacion.toLowerCase()}">${this.Codigo.escapeHTML()}</code></pre>
          </div>
        </div>
      `;
    }
    static cargarDesdeJson(json) { 
      //console.log(json);
      const ej = new Explicacion(
        json.Titulo, 
        Codigo.cargarDesdeJson(json.Codigo),
        json.Descripcion);
    
    return ej;
  }
    
  }
  