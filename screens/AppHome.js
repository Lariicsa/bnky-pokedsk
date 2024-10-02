/** @format */

import { StyleSheet, Text, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { fetchPokeData } from "../utils/http";
import PokeTypeItem from "../components/PokeTypeItem";

export default function AppHomeScreen({ navigation }) {
	const [fetchedPokemonData, setPokemonData] = useState();

	useEffect(() => {
		async function getPokeData() {
			const pokemons = await fetchPokeData(4);
			setPokemonData(pokemons);
		}

		getPokeData();
	}, []);

	function renderPokeTypeItem(itemData) {
		function pressHandler() {
			navigation.navigate("", {
				typeId: itemData.item.id,
			});
		}

		return (
			<PokeTypeItem
				title={itemData.item.name}
				id={itemData.item.id}
				onPress={pressHandler}
			/>
		);
	}

	return (
		<FlatList
			data={fetchedPokemonData}
			keyExtractor={(item) => item.name}
			renderItem={renderPokeTypeItem}
			numColumns={2}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		color: "#09f",
		alignItems: "center",
		justifyContent: "center",
	},
});
