/** @format */

import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Button,
} from "react-native";
import { useEffect, useState } from "react";
import { fetchPokemons } from "../utils/http";
import PokeTypeItem from "../components/PokeTypeItem";

export default function PokemonListScreen({ navigation }) {
	const [fetchedPokemonsData, setFetchedPokemonsData] =
		useState([]);
	const [offset, setOffset] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const [currentPage, setCurrentPage] = useState(0);

	useEffect(() => {
		loadMorePokemons();
	}, []);

	const loadMorePokemons = async () => {
		if (isLoading) return; // Evita llamadas múltiples

		setIsLoading(true);
		const newPokemons = await fetchPokemons(offset);
		setFetchedPokemonsData((prev) => [...prev, ...newPokemons]);
		setOffset((prev) => prev + 20); // Incrementa para la siguiente página
		setIsLoading(false);
	};

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
						itemData.index + 1 + currentPage
					}.png`,
				}}
				onPress={pressHandler}
			/>
		);
	}

	return (
		<>
			<FlatList
				data={fetchedPokemonsData}
				keyExtractor={(item) => item.name}
				showsVerticalScrollIndicator={true}
				renderItem={renderPokemonItem}
				onEndReached={loadMorePokemons}
				onEndReachedThreshold={0.5}
				numColumns={2}
			/>
		</>
	);
}
