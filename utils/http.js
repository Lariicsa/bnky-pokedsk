/** @format */

import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/";

export async function fetchPokemons(offset = 0) {
	try {
		const response = await axios.get(
			`${API_URL}pokemon?offset=${offset}&limit=20`
		);
		return response.data.results;
	} catch (error) {
		console.error("Error fetching Pokemons:", error);
		return [];
	}
}

export async function fetchPokemonDetail(id) {
	const response = await axios.get(`${API_URL}pokemon/${id}`);
	const types = response.data;

	return types;
}

export async function fetchPokeTypes() {
	const response = await axios.get(`${API_URL}type`);
	const types = response.data.results;
	return types;
}

export async function fetchPokemonsByType(id) {
	const response = await axios.get(`${API_URL}type/${id}`);
	const types = response.data.pokemon;
	return types;
}
