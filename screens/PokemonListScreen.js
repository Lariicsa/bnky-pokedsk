/** @format */

import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useEffect, useState } from "react";
import { fetchPokemons } from "../utils/http";
import PokeTypeItem from "../components/PokeTypeItem";

export default function PokemonListScreen({ navigation }) {
	const [fetchedPokemonsData, setPokemonsData] = useState();
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		async function getPokemons() {
			const response = await fetchPokemons(currentPage);
			const { data } = response;
			setPokemons(data.results);
			setTotalPages(data.counts);
			setPokemonsData(pokemons);
		}
		getPokemons();
	}, [currentPage]);

	const loadMorePokemons = () => {
		setCurrentPage(currentPage + 20);
	};

	function renderPokemonItem(itemData) {
		function pressHandler() {
			navigation.navigate("PokemonDetailScreen", {
				typeId: itemData.index + 1 + currentPage,
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
				onEndReachedThreshold={0.1}
				numColumns={2}
			/>
		</>
	);
}
