/** @format */

import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Pressable,
	FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import PokemonScreen from "./screens/PokemonScreen";

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			
				<PokemonScreen />
	
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#201d21",
		flex: 1,

		justifyContent: "center",
		alignItems: "center",
	},

	pokeTop: {
		paddingTop: 40,
		paddingHorizontal: 16,
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "start",
	},

	pokesContainer: {
		paddingTop: 10,
		flex: 2,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "stretch",
		flexWrap: "wrap",
		marginHorizontal: "auto",
		width: "90%",
	},

	mainTitle: {
		marginTop: 32,
		fontSize: 40,
		fontWeight: "700",
		color: "#ffffff",
	},

	optionButton: {
		width: "100%",
		height: 100,
		marginBottom: 24,
		borderRadius: 8,
	},

	option1: {
		backgroundColor: "#5DBE62",
	},
	option2: {
		backgroundColor: "#F7786B",
	},
	option3: {
		backgroundColor: "#58AAF6",
	},
	option4: {
		backgroundColor: "#B863CF",
	},

	commonText: {
		fontSize: 26,
		fontWeight: "700",
		color: "#ffffff",
		height: "100%",
		width: "100%",
		padding: 8,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		textAlignVertical: "center",
	},
});
