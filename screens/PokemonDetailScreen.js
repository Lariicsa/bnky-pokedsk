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

	const Item = ({ title }) => (
		<View style={styles.type}>
			<Text style={styles.typeText}>{title}</Text>
		</View>
	);

	const Abilities = ({ title }) => (
		<Text style={styles.abilityText}>· {title}</Text>
	);

	return (
		<View style={styles.listOuterContainer}>
			{fetchedDetail && (
				<>
					<View style={styles.listContainer}>
						<Text style={styles.title}>{fetchedDetail.name}</Text>
						<Text style={styles.pokeId}>#0{fetchedDetail.id}</Text>

						<View style={styles.types}>
							<FlatList
								data={fetchedDetail.types}
								renderItem={({ item }) => <Item title={item.type.name} />}
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
									<Abilities title={item.ability.name} />
								)}
								keyExtractor={(item) => item.slot}
								numColumns={2}
							/>
						</View>
					</View>
				</>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	listOuterContainer: {
		backgroundColor: "#5DBE62",
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
		color: "#fff",
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
		height: 200,
		backgroundColor: "#272727",
		padding: 24,
		borderTopRightRadius: 24,
		borderTopLeftRadius: 24,
		position: "relative",
	},

	section: {
		display: "flex",
		flexDirection: "column",
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
