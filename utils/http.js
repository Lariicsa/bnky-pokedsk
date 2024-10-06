/** @format */

import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/";

export async function fetchPokemons(offset) {
	const response = await axios.get(`${API_URL}pokemon?offset=${offset}&limit=20`);
  const types = response.data.results
  console.log(offset)
  return types
}

export async function fetchPokemonDetail(id) {
	const response = await axios.get(`${API_URL}pokemon/${id}`);
  const types = response.data

  return types
}

export async function fetchPokeTypes() {
	const response = await axios.get(`${API_URL}type`);
  const types = response.data.results
  return types
}

export async function fetchPokemonsByType(id) {
	const response = await axios.get(`${API_URL}type/${id}`);
  const types = response.data.pokemon
  return types
}
