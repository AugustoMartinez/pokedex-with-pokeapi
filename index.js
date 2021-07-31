import anime from "./node_modules/animejs/lib/anime.es.js";

const pokeApi = "https://pokeapi.co/api/v2";

let ele = document.querySelector('.battery-log');
let elements = document.getElementById("algo");

let puntosSalud = document.getElementById("ps");
let ataque = document.getElementById("atq");
let defensa = document.getElementById("def");
let ataqueEspecial = document.getElementById("atq-esp");
let defensaEspecial = document.getElementById("def-esp");
let velocidad = document.getElementById("vel");

let imgSprite = document.getElementById("pokemon-sprite");

const animacionBarra = (_valor, _stat) =>{
	anime({
		targets: _stat,
		width: _valor,
		duration: 2000,
	});
}

fetch(`${pokeApi}/pokemon/shedinja`)
	.then(res => res.json())
	.then(pokemon => {
		imgSprite.innerHTML += `<img src="${pokemon.sprites.front_default}" class="sprite" />`;
		animacionBarra(pokemon.stats[0].base_stat,puntosSalud);
		animacionBarra(pokemon.stats[1].base_stat,ataque);
		animacionBarra(pokemon.stats[2].base_stat,defensa);
		animacionBarra(pokemon.stats[3].base_stat,ataqueEspecial);
		animacionBarra(pokemon.stats[4].base_stat,defensaEspecial);
		animacionBarra(pokemon.stats[5].base_stat,velocidad);
	})
	.catch(err => console.log(err));

