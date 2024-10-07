/** @format */
import { View, Text, Image, StyleSheet, Button, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { fetchPokemonDetail } from "../utils/http";
import AnswerInput from "../components/WhosThatInput";

export default function PokemonWhosThat({ route, navigation }) {
	const [inputValue, setInputValue] = useState("");
	const [currentId, setNewId] = useState();
	const [pokeName, setPokeName] = useState();
	const [currentColor, setColor] = useState(true);

	useEffect(() => {
		if (inputValue === "") {
			getRandomId();
		}
	}, [pokeName]);

	function checkAnswerValue() {
		if (inputValue !== "") {
			if (pokeName === inputValue) {
				setColor(false);
			} else {
				setColor(true);
			}
		}
	}

	async function getRandomId() {
		setColor(true);
		setInputValue("");
		const newId = Math.floor(Math.random() * 30) + 1;
		setNewId(newId);
		const { data } = await fetchPokemonDetail(newId);
		setPokeName(data.name);
		console.log("pokeName", data.name);
		return newId;
	}

	return (
		<View style={styles.outerContainer}>
			<Text style={styles.title}>Who's this Pokémon? </Text>
			<Image
				source={{
					uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${currentId}.png`,
				}}
				style={[styles.image, [currentColor ? styles.hidden : ""]]}
			/>

			<AnswerInput
				label="Type your Answer"
				textInputConfig={{
					onChangeText: (newText) => setInputValue(newText),
					value: inputValue,
				}}
			/>

			{currentColor ? (
				<Pressable style={styles.button} onPress={checkAnswerValue}>
					<Text style={styles.buttonText}>Check</Text>
				</Pressable>
			) : (
				<Pressable style={styles.button} onPress={getRandomId}>
					<Text style={styles.buttonText}>Play again</Text>
				</Pressable>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	outerContainer: {
		backgroundColor: "#F3D23B",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 40,
		width: "100%",
		height: "100%",
	},

	title: {
		fontSize: 56,
		fontWeight: "bold",
		color: "#276DC4",
	},

	button: {
		backgroundColor: "#CD4069",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: 44,
		padding: 8,
		borderRadius: 8,
		textAlign: "center",
		marginTop: 16,
	},

	buttonText: {
		fontSize: 22,
		fontWeight: "bold",
		color: "#fff",
	},

	image: {
		display: "flex",
		width: 250,
		height: 250,
		resizeMode: "contain",
		marginHorizontal: "auto",
		marginBottom: 40,
	},

	box: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		padding: 16,
		marginHorizontal: "auto",
		marginVertical: "auto",
	},

	hidden: {
		tintColor: "#000",
	},
});
