const fetchBtn = document.getElementById("fetch-btn");
const axiosBtn = document.getElementById("axios-btn");
const dataContainer = document.getElementById("data-container");

// Función para mostrar los personajes en el contenedor
function renderCharacters(characters) {
  dataContainer.innerHTML = ""; // Limpiar contenedor antes de agregar datos
  characters.forEach((character) => {
    const characterElement = document.createElement("div");
    characterElement.classList.add("col-md-4");
    characterElement.innerHTML = `
      <div class="card">
        <img src="${character.image}" class="card-img-top" alt="${character.name}">
        <div class="card-body">
          <h5 class="card-title">${character.name}</h5>
        </div>
      </div>
    `;
    dataContainer.appendChild(characterElement);
  });
}

// Implementa la solicitud con Fetch
fetchBtn.addEventListener("click", () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.json();
    })
    .then((data) => {
      renderCharacters(data.results); // Mostrar los personajes en el contenedor
    })
    .catch((error) => {
      console.error("Error con Fetch:", error);
      dataContainer.innerHTML =
        '<p class="text-danger">Hubo un error al obtener los datos.</p>';
    });
});

// Implementa la solicitud con Axios
axiosBtn.addEventListener("click", () => {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((response) => {
      renderCharacters(response.data.results); // Mostrar los personajes en el contenedor
    })
    .catch((error) => {
      console.error("Error con Axios:", error);
      dataContainer.innerHTML =
        '<p class="text-danger">Hubo un error al obtener los datos.</p>';
    });
});
