const fetch = require('node-fetch');

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemon = async (pokemonName) => {
    const response = await fetch(
        pokemonUrl + pokemonName)
    return response.json();
}

const getPokemonMaisPesado = async (primeiroPokemon, segundoPokemon) => {
    const responsePrimeiroPokemon = await fetch(
        pokemonUrl + primeiroPokemon)
    const responseSegundoPokemon = await fetch(
        pokemonUrl + segundoPokemon)
    const objetoPrimeiroPokemon = await responsePrimeiroPokemon.json();
    const objetoSegundoPokemon = await responseSegundoPokemon.json();
    if (objetoPrimeiroPokemon.weight > objetoSegundoPokemon.weight)
        return objetoPrimeiroPokemon.name;
    else if (objetoPrimeiroPokemon.weight < objetoSegundoPokemon.weight)
        return objetoSegundoPokemon.name;
    else
        return null;
}

async function isThisPokemonPikachu(pokemonCaptured) {
    const response = await fetch(pokemonUrl + pokemonCaptured);
    const pokemonIsCaptured = await response.json();
    if(pokemonIsCaptured.name == 'pikachu'){
        return pokemonIsCaptured.name;
    } else {
        return 'Ohh, you didnt capture a Pikachu';
    }

}

module.exports = {
    getPokemon,
    getPokemonMaisPesado, isThisPokemonPikachu
}