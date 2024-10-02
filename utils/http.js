/** @format */

import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/type";

export async function fetchPokeData(id) {
	const response = await axios.get(`${API_URL}`);
  const types = response.data.results


  return types

}
