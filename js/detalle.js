async function mostrarDetalle(id){
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    const data = await res.json()

    let tipoPoke = "";
    const app = document.getElementById("app");

    for (var i = 0; i < data.types.length; i++) {
        tipoPoke += `<span>${data.types[i].type.name}</span>`
    }

    var detalle = `
    <section class="c-detalle">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" height="120" width="auto">
        <p>${data.name}</p>
        <p>${data.id}</p>
        <p>${tipoPoke}</p>
        <p>Altura: ${data.height/ 10} m / Peso: ${data.weight/ 10} km</p>
        <p>hp: ${data.stats[0].base_stat}</p>
        <p>Velocidad: ${data.stats[5].base_stat}</p>
        <p>Ataque: ${data.stats[1].base_stat} Defensa: ${data.stats[2].base_stat}</p>
        <p>Ataque Especial: ${data.stats[3].base_stat} Defensa Especial: ${data.stats[4].base_stat}</p>
        
    </section>
    `

    app.innerHTML = detalle;
}
