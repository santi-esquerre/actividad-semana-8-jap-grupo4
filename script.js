document.addEventListener("DOMContentLoaded", () => {
    const contenido = document.getElementById("contenido");
    var gatitos = [];
    const DATA_URL = "data.json";
  
    async function cargarLista() {
      try {
        const response = await fetch(DATA_URL);
        const data = await response.json();
        gatitos = data.gatitos;
        console.log(gatitos);
      } catch (error) {
        console.error("Error al cargar JSON:", error);
      }
    }
  
    async function cargarContenido() {
      await cargarLista();
      for (const gato of gatitos) {
        contenido.innerHTML += `<section>
            <h2>${gato.nombre}</h2>
            <p style="margin-bottom:7em;">
              <span>Edad:</span> ${gato.edad} <br />
              <span>Raza:</span> ${gato.color} <br />
              <span>Juguetes favoritos:</span> ${gato.juguetes} <br />
              <img src="${gato.imagen}" alt="${gato.nombre}" class="cats-img" /> <br />
              <span>Comentarios:</span> ${gato.comentarios}
            </p>
        </section>`;
      }
    }
  
    cargarContenido();
  });


