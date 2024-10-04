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

export default function PokemonDetailScreen({ route, navigation }) {
	const pokeId = route.params.typeId;
	const [fetchedDetail, setPokemonDetails] = useState();

	useEffect(() => {
		async function getPokemonDetail() {
			const pokemons = await fetchPokemonDetail(pokeId);

			setPokemonDetails(pokemons);
		}
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
		<>
			{fetchedDetail && (
				<View
					style={[
						styles.listOuterContainer,
						{
							backgroundColor: `rgba(${RGBAColor(
								fetchedDetail.types[0].type.name
							)}, 0.4)`,
						},
					]}>
					<View style={styles.listContainer}>
						<Text style={styles.title}>{fetchedDetail.name}</Text>
						<Text style={styles.pokeId}>#0{fetchedDetail.id}</Text>

						<View style={styles.types}>
							<FlatList
								data={fetchedDetail.types}
								renderItem={({ item }) => (
									<Tag
										title={item.type.name}
										bg={HEXColor(fetchedDetail.types[0].type.name)}
									/>
								)}
								keyExtractor={(item) => item.slot}
								numColumns={3}
							/>
						</View>
					</View>

					<View style={styles.box}>
						<Image
							source={{
								uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${fetchedDetail.id}.png`,
							}}
							style={styles.image}
						/>

						<View style={styles.section}>
							<Text style={styles.sectionText}>Abilities:</Text>

							<FlatList
								data={fetchedDetail.abilities}
								renderItem={({ item }) => (
									<StatItem title={item.ability.name} />
								)}
								keyExtractor={(item) => item.slot}
								numColumns={2}
							/>
						</View>

						<View style={[styles.section, styles.maxHgt]}>
							<Text style={styles.sectionText}>Moves:</Text>

							<FlatList
								data={fetchedDetail.moves}
								renderItem={({ item }) => <StatItem title={item.move.name} />}
								keyExtractor={(item) => item.move.name}
								numColumns={2}
							/>
						</View>
					</View>
				</View>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	listOuterContainer: {
		display: "flex",
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "column",
		paddingHorizontal: 0,
		height: "100%",
	},
	listContainer: {
		display: "flex",
		flexDirection: "column",
		flex: 1,
		width: "96%",
		height: "auto",
		position: "relative",
		paddingTop: 24,
	},

	image: {
		display: "flex",
		width: 250,
		height: 250,
		resizeMode: "contain",
		marginHorizontal: "auto",
		position: "absolute",
		top: -240,
		left: "24%",
	},
	title: {
		fontWeight: "bold",
		fontSize: 32,
		margin: 8,
		color: "white",
		textTransform: "capitalize",
	},

	types: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		height: 30,
		width: "100%",
		paddingLeft: 16,
	},
	type: {
		display: "flex",
		flex: 0,
		backgroundColor: "red",
		width: "auto",
		paddingVertical: 2,
		paddingHorizontal: 8,
		marginRight: 4,
		marginBottom: 4,
		borderRadius: 16,
	},
	typeText: {
		display: "flex",
		color: "#111",
		fontSize: 11,
		textTransform: "uppercase",
	},
	pokeId: {
		color: "#fff",
		fontSize: 20,
		position: "absolute",
		right: 24,
		top: 30,
	},
	box: {
		display: "flex",
		flex: 1,
		width: "100%",
		height: 300,
		backgroundColor: "#272727",
		padding: 24,
		borderTopRightRadius: 24,
		borderTopLeftRadius: 24,
		position: "relative",
	},

	section: {
		display: "flex",
		flexDirection: "column",
		marginVertical: 16,
	},

	maxHgt: {
		maxHeight: 200,
	},

	sectionText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#c1c1c1",
		marginBottom: 8,
	},
	abilityText: {
		fontSize: 16,
		color: "#747474",
		paddingLeft: 16,
		marginRight: 4,
	},
});
