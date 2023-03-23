class Ejemplo {
    constructor(numero, nombre, explicacionJS, explicacionHTML, explicacionCSS, embed, descripcionGeneral) {
      this.numero = numero;
      this.nombre = nombre;
      this.explicacionJS = explicacionJS;
      this.explicacionHTML = explicacionHTML;
      this.explicacionCSS = explicacionCSS;
      this.embed = embed;
      this.descripcionGeneral = descripcionGeneral;
    }
  
    toBootstrapHtml() {
      return `
        <div class="container mt-4">
          <h1>${this.numero}-${this.nombre}</h1>
          <p class="cw">${this.descripcionGeneral}</p>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="js-tab${this.numero}" data-bs-toggle="tab" data-bs-target="#js${this.numero}" type="button" role="tab" aria-controls="js" aria-selected="true">JS</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="html-tab${this.numero}" data-bs-toggle="tab" data-bs-target="#html${this.numero}" type="button" role="tab" aria-controls="html" aria-selected="false">HTML</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="css-tab${this.numero}" data-bs-toggle="tab" data-bs-target="#css${this.numero}" type="button" role="tab" aria-controls="css" aria-selected="false">CSS</button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="js${this.numero}" role="tabpanel" aria-labelledby="js-tab${this.numero}">
              ${this.explicacionJS.toBootstrapHtml()}
            </div>
            <div class="tab-pane fade" id="html${this.numero}" role="tabpanel" aria-labelledby="html-tab${this.numero}">
              ${this.explicacionHTML.toBootstrapHtml()}
            </div>
            <div class="tab-pane fade" id="css${this.numero}" role="tabpanel" aria-labelledby="css-tab${this.numero}">
              ${this.explicacionCSS.toBootstrapHtml()}
            </div>
          </div>
          <div class="mt-4">
            <a class="btn btn-primary" href="${this.embed}" target="_blank">Ver en JSFiddle</a>
          </div>
        </div>
      `;
    }
    guardarEnJson() {
      let name = window.prompt("Introduce el nombre del futuro fichero JSON para este ejemplo");
      if (name != '' && name != null)
      {
        const data = JSON.stringify(this); // convertir el objeto a una cadena JSON
        const file = new Blob([data], { type: 'application/json' }); // crear un Blob con la cadena JSON
        const url = URL.createObjectURL(file); // crear una URL para el Blob    
        const a = document.createElement('a'); // crear un elemento "a"
        a.href = url; // establecer la URL como la dirección del enlace      
        a.download = name+'.json'; // establecer el nombre del archivo descargado
        document.body.appendChild(a); // agregar el elemento al   
        a.click(); // hacer clic en el enlace para descargar el archivo
        document.body.removeChild(a); // eliminar el elemento del DOM
        window.alert("DONE");
      }
      
    }

    static cargarDesdeJson(json) {
      //console.log(json); 
      const ej = new Ejemplo(
      json.numero,
      json.nombre,
      Explicacion.cargarDesdeJson(json.explicacionJS),
      Explicacion.cargarDesdeJson(json.explicacionHTML),
      Explicacion.cargarDesdeJson(json.explicacionCSS),
      json.embed,
      json.descripcionGeneral
    );    
    return ej;
  }
    
  }
  