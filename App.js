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

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<View style={styles.container}>
				<View style={styles.pokeTop}>
					<Text style={styles.mainTitle}>What are you looking for?</Text>
				</View>

				<ScrollView>
					<View style={[styles.pokesContainer]}>
						<View style={[styles.optionButton, styles.option1]}>
							<Pressable android_ripple={{ color: "#75C879" }}>
								<Text style={styles.commonText}>Pokèmon</Text>
							</Pressable>
						</View>

						<View style={[styles.optionButton, styles.option2]}>
							<Pressable android_ripple={{ color: "#F88C81" }}>
								<Text style={styles.commonText}>Items</Text>
							</Pressable>
						</View>

						<View style={[styles.optionButton, styles.option3]}>
							<Pressable android_ripple={{ color: "#71B7F7" }}>
								<Text style={styles.commonText}>Moves</Text>
							</Pressable>
						</View>

						<View style={[styles.optionButton, styles.option4]}>
							<Pressable android_ripple={{ color: "#C37AD6" }}>
								<Text style={styles.commonText}>Types</Text>
							</Pressable>
						</View>
					</View>
				</ScrollView>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#201d21",
		flex: 1,
		flexDirection: "column",
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
