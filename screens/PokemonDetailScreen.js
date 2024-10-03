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
import { fetchPokemonsByType } from "../utils/http";

// import IconButton from "../components/IconButton";
// import AppList from "../components/MealDetail/List";
// import AppSubtitle from "../components/AppSubtitle";

function PokemonDetailScreen({ route, navigation }) {
	const [fetchedPokemonDetails, setPokemonDetails] = useState();
	const pokeId = route.params.typeId;

	useEffect(() => {
		async function getPokemonsByType() {
			const pokemons = await fetchPokemonsByType(pokeId);
			// console.log(pokemons)
			setPokemonDetails(pokemons);
		}
		getPokemonsByType();
	}, []);

	return (
		<>
			<FlatList
				data={fetchedPokemonDetails}
				keyExtractor={(item) => item.name}
				numColumns={2}
			/>
		</>
	);
}

export default PokemonDetailScreen;

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
