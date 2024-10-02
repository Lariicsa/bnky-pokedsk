/** @format */

import { StyleSheet, Text, View, Pressable } from "react-native";

export default function AppHomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={[styles.text, styles.title]}>Welcome!</Text>
			<Text style={[styles.text, styles.subtitle]}>
				What info would you like to know?
			</Text>

			<Pressable
				onPress={() => {
					navigation.navigate("PokemonTypeScreen");
				}}>
				<View style={[styles.menuOption, styles.option1]}>
					<Text style={styles.textOption}>Types</Text>
				</View>
			</Pressable>

			<View style={[styles.menuOption, styles.option2]}>
				<Text style={styles.textOption}>Moves</Text>
			</View>

			<View style={[styles.menuOption, styles.option3]}>
				<Text style={styles.textOption}>Locations</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		paddingVertical: 32,
		paddingHorizontal: 24,
	},

	text: {
		textAlign: "center",
		marginBottom: 24,
	},

	title: {
		fontSize: 44,
		color: "#ffffff",
		fontWeight: "bold",
	},

	subtitle: {
		fontSize: 20,
		color: "#A8A8A8",
		marginBottom: 40,
		fontWeight: "semibold",
	},

	menuOption: {
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

	textOption: {
		fontSize: 26,
		fontWeight: "bold",
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

	button: {
		flex: 1,
	},

	buttonPressed: {
		opacity: 0.5,
	},
});
