/** @format */
import {
	View,
	Text,
	Image,
	StyleSheet,
	ImageBackground,
	FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { fetchPokemonDetail } from "../utils/http";
import PokemonDetails from "../components/PokemonDetails";

export default function PokemonDetailScreen({ route, navigation }) {
	const pokeId = route.params.typeId;
	const [fetchedPokemonDetails, setPokemonDetails] = useState();
	

	useEffect(() => {
		
		async function getPokemonDetail() {
			const pokemons = await fetchPokemonDetail(pokeId);
			console.log("pokeId", pokemons.name);
			setPokemonDetails(pokemons);
		}
		getPokemonDetail();
	}, []);


	return (
		<>
			<Text>Some</Text>
			{/* <PokemonDetails title={pokemons.name} /> */}
		</>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 32,
	},
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
		textAlign: "center",
		color: "white",
	},
	detailText: {
		color: "white",
	},
	listOuterContainer: {
		alignItems: "center",
	},
	listContainer: {
		width: "80%",
	},
});
