/** @format */

import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokeData(id) {
	const response = await axios.get(API_URL`/${id}`);

  return response

}
