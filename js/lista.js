function mostrarLista(pokemones) {
    const app = document.getElementById("app");
    app.innerHTML = ""; // Limpia el contenido

    const seccion = document.createElement("section");
    seccion.classList.add("c-lista");

    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar Pokémon...";
    buscador.addEventListener("input", (evento) => buscarPoke(evento, pokemones));

    // Generar la lista inicial
    seccion.innerHTML = generarLista(pokemones);

    // Agregar elementos al DOM
    app.appendChild(buscador);
    app.appendChild(seccion);
}


function generarLista(pokemones) {
    let listaHTML = "";
    for (let i = 0; i < pokemones.length; i++) {
        let id = pokemones[i].url.split("/")[6];
        listaHTML += `
        <div class="c-lista-pokemon poke-${id}" onclick="mostrarDetalle('${id}')">
            <p>#${id}</p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" width="auto" height="60" loading="lazy" alt="${pokemones[i].name}">
            <p>${pokemones[i].name}</p>
        </div>`;
    }

    return listaHTML;
}

function buscarPoke(evento, pokemones) {
    const texto = evento.target.value.toLowerCase();
    if (texto.length >= 3 && isNaN(texto)) {
        const listaFiltrada = pokemones.filter((pokemon) => pokemon.name.includes(texto));
        document.querySelector(".c-lista").innerHTML = generarLista(listaFiltrada);
    }

    if (!isNaN(texto)) {
        const listaFiltrada = pokemones.filter((pokemon) => pokemon.url.includes("/" + texto));
        document.querySelector(".c-lista").innerHTML = generarLista(listaFiltrada);
    }

    if (texto.length === 0) {
        document.querySelector(".c-lista").innerHTML = generarLista(pokemones);
    }
}




