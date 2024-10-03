/** @format */

import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/";

export async function fetchPokemons() {
	const response = await axios.get(`${API_URL}`);
  const types = response.data.results
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
