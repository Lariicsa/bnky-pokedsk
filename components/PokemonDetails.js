/** @format */
import {
	Pressable,
	View,
	Text,
	StyleSheet,
	Platform,
	Image,
} from "react-native";

function PokemonDetail({ title, onPress, image, id }) {
	return (
		<View style={styles.gridItem}>

				<Image source={image} style={styles.image}></Image>
				<Text style={styles.title}>HERE SOME {title}</Text>
	
		</View>
	);
}

export default PokemonDetail;

const styles = StyleSheet.create({
	gridItem: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "center",
		flex: 1,
		margin: 16,
		height: 100,
		width: 100,
		elevation: 1,

		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		flex: 1,
		padding: 8,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontWeight: "semibold",
		fontSize: 18,
		color: "#fff",
		textTransform: "capitalize",
	},
	image: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "auto",
		height: 100,
		resizeMode: "stretch",
	},
});
