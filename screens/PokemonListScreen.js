/** @format */

import { StyleSheet, Text, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { fetchPokemons } from "../utils/http";
import PokeTypeItem from "../components/PokeTypeItem";

export default function PokemonListScreen({ navigation }) {
	const [fetchedPokemonsData, setPokemonsData] = useState();

	useEffect(() => {
		async function getPokemons() {
			const types = await fetchPokemons();
			setPokemonsData(types);
		}
		getPokemons();
	}, []);

	function renderPokemonItem(itemData) {
		function pressHandler() {
			navigation.navigate("PokemonDetailScreen", {
				typeId: itemData.index + 1,
			});
		}

		return (
			<PokeTypeItem
				title={itemData.item.name}
				id={itemData.index}
				image={{
					uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
						itemData.index + 1
					}.png`,
				}}
				onPress={pressHandler}
			/>
		);
	}

	return (
		<FlatList
			data={fetchedPokemonsData}
			keyExtractor={(item) => item.name}
			renderItem={renderPokemonItem}
			numColumns={2}
		/>
	);
}
