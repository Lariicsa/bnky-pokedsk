/** @format */

import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/type";

export async function fetchPokeTypes(id) {
	const response = await axios.get(`${API_URL}`);
  const types = response.data.results
  return types
}

export async function fetchPokemonsByType(id) {
	const response = await axios.get(`${API_URL}/${id}`);
  const types = response.data.results
  return types
}
