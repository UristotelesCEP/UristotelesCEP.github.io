function comprobarNumeroEnURL() {
    const url = window.location.href;
    const hashIndex = url.indexOf("#");
    if (hashIndex !== -1) {
      return true;
    } else {
      return false;
    }
  }
  

  function obtenerNumeroDeURL() {
    const url = window.location.href;
    const hashIndex = url.indexOf("#");
    if (hashIndex !== -1) {
      const numero = url.slice(hashIndex + 1);
      return Number(numero);
    } else {
      return null;
    }

    
  }


  // function generarListGroupConScrollListener(elementos, ids, divDeLaPagina) {
  //   // Obtener el div del documento que se corresponde con el que se le pasa como parámetro
  //   const divContenedor = document.getElementById(divDeLaPagina);
  //   console.log(divContenedor);
  //   // Crear un elemento ListGroup de Bootstrap
  //   const listGroup = document.createElement('ul');
  //   listGroup.classList.add('list-group');
  
  //   // Recorrer los elementos del array y crear un elemento ListGroupItem de Bootstrap para cada uno
  //   elementos.forEach(function(elemento, cnt){
  //     const listGroupItem = document.createElement('li');
  //     listGroupItem.classList.add('list-group-item');
  //     listGroupItem.innerText = elemento;
  
  //     // Asociar el elemento ListGroupItem con el div correspondiente, utilizando el array de ids que se le pasa como parámetro      
  //     const divAsociado = document.getElementById(ids[cnt]);

  //     document.addEventListener('DOMContentLoaded', () => {
  //       listGroupItem.addEventListener('click', () => {
  //         divAsociado.scrollIntoView({ behavior: 'smooth' });
  //       });
  //     });           
      
  
  //     // Añadir el elemento ListGroupItem al elemento ListGroup
  //     listGroup.appendChild(listGroupItem);
  //   });
  
  //   // Asociar el listener de scroll al div de la página correspondiente
  //   divContenedor.addEventListener('scroll', () => {
  //     console.log('El usuario ha hecho scroll');
  //     // Aquí puedes añadir el código que quieras ejecutar cuando se detecte un scroll en el div
  //   });
  
  //   // Añadir el elemento ListGroup al div correspondiente
  //   divContenedor.appendChild(listGroup);
  // }
  
  
  