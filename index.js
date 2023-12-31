
const listaPokemon =document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
const botonBuscar = document.querySelectorAll(".buscar");
let URL = "https://pokeapi.co/api/v2/pokemon/";
let arrPok = [];

  for (let i = 1; i<= 151; i++){
    fetch(URL + i)
        .then((response) => response.json())
        .then(data =>  {
            mostarPokemon(data);
            arrPok.push(data);
        })
  }
  listaPokemon.data = arrPok;

  function mostarPokemon(poke){
    let tipos = poke.types.map((type) =>  
        `<p class="${type.type.name} tipo">${type.type.name}</p>`
    );
    tipos = tipos.join('');

    let pokeId = poke.id.toString();
    if (pokeId.length === 1){
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2){
        pokeId = "0" + pokeId;
    }


     const div = document.createElement("div");
     div.classList.add("pokemon");
     div.innerHTML = `
     <p class="pokemon-id-back">#${pokeId}</p>
     <div class="pokemon-imagen">
         <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
     </div>
     <div class="pokemon-info">
         <div class="nombre-contenedor">
             <p class="pokemon-id">#${pokeId}</p>
             <h2 class="pokemon-nombre">${poke.name}</h2>
             <div class="pokemon-tipos">
                 ${tipos}
             </div>
             <div class="pokemon-stats">
                 <p class="stat">${poke.height}m</p>
                 <p class="stat">${poke.weight}kg</p>
             </div>
         </div>
     </div>
 </div>`;

 listaPokemon.append(div);

  }

  function mostarPokemon1(poke){
    let tipos = poke.types.map((type) =>  
        `<p class="${type.type.name} tipo">${type.type.name}</p>`
    );
    tipos = tipos.join('');

    let pokeId = poke.id.toString();
    if (pokeId.length === 1){
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2){
        pokeId = "0" + pokeId;
    }


     const div = document.createElement("div");
     div.classList.add("pokemon");
     div.innerHTML = `
     <p class="pokemon-id-back">#${pokeId}</p>
     <div class="pokemon-imagen">
         <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
     </div>
     <div class="pokemon-info">
         <div class="nombre-contenedor">
             <p class="pokemon-id">#${pokeId}</p>
             <h2 class="pokemon-nombre">${poke.name}</h2>
             <div class="pokemon-tipos">
                 ${tipos}
             </div>
             <div class="pokemon-stats">
                 <p class="stat">${poke.height}m</p>
                 <p class="stat">${poke.weight}kg</p>
             </div>
         </div>
     </div>
 </div>`;
listaPokemon.innerHTML = "";
 listaPokemon.append(div);

  }



  function buscar() {
    let data = document.querySelector("#listaPokemon").data;
    
    let busqueda = document.querySelector("#nPokemon").value;

    data.forEach((element)=>{
if(element.id == busqueda){
    console.log(element);
    mostarPokemon1(element);
}
    });
  }
/*
    if(busqueda>=0){
      fetch(URL)
            .then((response) => response.json())
            .then(data => {
                if(botonId === "nPokemon"){
                    mostarPokemon(data);
                } 
            })
    }
  }
*/

botonesHeader.forEach(boton=> boton.addEventListener("click", (event) =>{
    const botonId = event.currentTarget.id;

    listaPokemon.innerHTML = "";

    for (let i = 1; i<= 151; i++){
        fetch(URL + i)
            .then((response) => response.json())
            .then(data => {
                if(botonId === "ver-todos"){
                    mostarPokemon(data);
                } 
                else {
                    const tipos = data.types.map(type => type.type.name);
                if (tipos.some(tipo => tipo.includes(botonId))) {
                    mostarPokemon(data);
                }
                }
            })
      }
}))

