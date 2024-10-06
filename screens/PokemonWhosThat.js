/** @format */
import { View, Text, Image, StyleSheet, Button, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { fetchPokemonDetail } from "../utils/http";
import AnswerInput from "../components/WhosThatInput";

export default function PokemonWhosThat({ route, navigation }) {
	const [inputValue, setInputValue] = useState("");
	const [currentId, setNewId] = useState();
	const [pokeName, setPokeName] = useState();
	const [currentColor, setColor] = useState("hidden");

	useEffect(() => {
		if (inputValue == "") {
			getRandomId();
		}
	}, [pokeName]);

	function checkAnswerValue() {
		if (pokeName === inputValue) {
			setColor("unhide");
      setInputValue("")
		}
		console.log("currentColor", currentColor);

	}

	async function getRandomId() {
		const newId = Math.floor(Math.random() * 20) + 1;
		setNewId(newId);
		const { name } = await fetchPokemonDetail(newId);
		setPokeName(name);

		console.log("pokeName", pokeName);

		return newId;
	}

	return (
		<View style={styles.outerContainer}>
			<Text style={styles.title}>Who's this Pokémon? </Text>
			<Image
				source={{
					uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${currentId}.png`,
				}}
				style={[styles.image, styles.hidden]}
			/>

			<AnswerInput
				label="Type your Answer"
				textInputConfig={{
					onChangeText: (newText) => setInputValue(newText),
					value: inputValue,
				}}
			/>

			<Pressable style={styles.button} onPress={checkAnswerValue}>
				<Text style={styles.buttonText}>Check</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	outerContainer: {
		backgroundColor: "#fb370d",
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
		color: "#fff",
	},

	button: {
		backgroundColor: "#fbb002",
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
		fontSize: 24,
		fontWeight: "bold",
		color: "#000",
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
    tintColor: '#000'
  },
  unhide:{
    tintColor: '#fff'
  }

});
