/** @format */

import { FlatList } from "react-native";
import ItemsGrid from "../components/ItemsGrid";
import { CATEGORIES } from "../data/mock";

function renderPokemonItem(itemData) {
	return <ItemsGrid title={itemData.item.title} color={itemData.item.color} />;
}

function PokemonScreen(item) {
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
