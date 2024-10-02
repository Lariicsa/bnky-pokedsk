/** @format */

import { StyleSheet, Text, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { fetchPokeTypes } from "../utils/http";
import PokeTypeItem from "../components/PokeTypeItem";

export default function PokemonTypesScreen({ navigation }) {
	const [fetchedTypesData, setTypesData] = useState();

	useEffect(() => {
		async function getPokeTypes() {
			const pokemons = await fetchPokeTypes();
			setTypesData(pokemons);
		}

		getPokeTypes();
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
			data={fetchedTypesData}
			keyExtractor={(item) => item.name}
			renderItem={renderPokeTypeItem}
			numColumns={2}
		/>
	);
}
