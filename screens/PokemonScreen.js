/** @format */

import { FlatList } from "react-native";
import ItemsGrid from "../components/ItemsGrid";
import { CATEGORIES } from "../data/mock";

function PokemonScreen({ navigation }) {
	function renderPokemonItem(itemData) {
		function pressHandler() {
			navigation.navigate("DetailScreen", {
				categoryId: itemData.item.id,
				
			});
		}

		return (
			<ItemsGrid
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={pressHandler}
				navigation={navigation}
			/>
		);
	}

	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={renderPokemonItem}
			numColumns={2}
		/>
	);
}
export default PokemonScreen;
