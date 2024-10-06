/** @format */
import {
	View,
	Text,
	Image,
	StyleSheet,
	ImageBackground,
	FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { fetchPokemonDetail } from "../utils/http";

export default function PokemonWhosThat({ route, navigation }) {
	const [fetchedDetail, setPokemonDetails] = useState();

	useEffect(() => {
		async function getPokemonDetail() {}
		getPokemonDetail();
	}, []);

	const RGBAColor = (type) => {
		const POKEMON_TYPE = {
			fire: "251,156,84",
			fighting: "205, 64, 105",
			grass: "99, 187, 91",
			psychic: "249, 113, 118",
			poison: "171, 106, 200",
			dragon: "39, 109, 196",
			ghost: "82, 105, 172",
			dark: "90, 83, 102",
			ground: "217, 119, 69",
			fairy: "236, 143, 230",
			water: "77, 144, 213",
			flying: "143, 168, 221",
			normal: "144, 152, 161",
			rock: "199, 183, 139",
			electric: "243, 210, 59",
			bug: "144, 193, 43",
			ice: "116, 206, 192",
			steel: "90, 142, 160",
		};
		const BG_COLOR = POKEMON_TYPE[type] ?? false;
		return BG_COLOR;
	};

	const HEXColor = (type) => {
		const POKEMON_TYPE = {
			fire: "#fb9c54",
			fighting: "#CD4069",
			grass: "#63bb5b",
			psychic: "#f97176",
			poison: "#ab6ac8",
			dragon: "#276dc4",
			ghost: "#5269ac",
			dark: "#5a5366",
			ground: "#d97745",
			fairy: "#ec8fe6",
			water: "#4d90d5",
			flying: "#8fa8dd",
			normal: "#9098a1",
			rock: "#c7b78b",
			electric: "#f3d23b",
			bug: "#90c12b",
			ice: "#74cec0",
			steel: "#5a8ea0",
		};
		const BG_COLOR = POKEMON_TYPE[type] ?? false;
		return BG_COLOR;
	};

	const Tag = ({ title, bg }) => (
		<View style={[styles.type, { backgroundColor: bg }]}>
			<Text style={styles.typeText}>{title}</Text>
		</View>
	);

	const StatItem = ({ title }) => (
		<Text style={styles.abilityText}>· {title}</Text>
	);

	return (
		<View style={styles.outerContainer}>
			<ImageBackground style={styles.box}>
				<Image
					source={{
						uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${5}.png`,
					}}
					style={styles.image}
				/>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	outerContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 100,
	},

	image: {
		display: "flex",
		width: 250,
		height: 250,
		resizeMode: "contain",
		marginHorizontal: "auto",
	},
});
