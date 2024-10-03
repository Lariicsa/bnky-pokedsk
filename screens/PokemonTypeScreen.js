/** @format */

import { StyleSheet, Text, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { fetchPokeTypes } from "../utils/http";
import PokeTypeItem from "../components/PokeTypeItem";

export default function PokemonTypesScreen({ navigation }) {
	const [fetchedTypesData, setTypesData] = useState();
	const ulrBase = "../assets/pokeicons/";

	useEffect(() => {
		async function getPokeTypes() {
			const types = await fetchPokeTypes();
			setTypesData(types);
		}
		getPokeTypes();
	}, []);

	function renderPokeTypeItem(itemData) {
		function pressHandler() {
			navigation.navigate("PokemonDetailScreen", {
				typeId: itemData.index,
			});
		}

		return (
			<PokeTypeItem
				title={itemData.item.name}
				id={itemData.index}
				image={`${ulrBase}${itemData.item.name}.png`}
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
