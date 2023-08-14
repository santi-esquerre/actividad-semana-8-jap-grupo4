document.addEventListener("DOMContentLoaded", () => {
  const contenido = document.getElementById("contenido");
  var gatitos = [];
  const DATA_URL = "/data.json";

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
          <p>
            Edad: ${gato.edad} <br />
            Raza: ${gato.color} <br />
            Juguetes favoritos: ${gato.juguetes}
          </p>
          <img src="${gato.imagen}" alt="${gato.nombre}" />
      </section>`;
    }
  }

  cargarContenido();
});
