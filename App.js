/** @format */

import { StyleSheet, Text, View, ScrollView, Button } from "react-native";

export default function App() {
	return (
		<View style={styles.appContainer}>
			<View style={styles.mainContainer}>
				<Text style={styles.mainTitle}>Pokedesk !</Text>
				<View syle={styles.pokesContainer}>
					<ScrollView>
            <Button style={styles.optionButton} title='one'></Button>
          </ScrollView>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		padding: 0,
		flex: 1,
		backgroundColor: "#09f",
		alignItems: "center",
		justifyContent: "center",
	},
	mainContainer: {
		paddingTop: 56,
		paddingHorizontal: 16,
		flex: 1,
		backgroundColor: "#121212",
		alignItems: "center",
		justifyContent: "start",
		width: "100%",
	},
	mainTitle: {
		marginTop: 16,
		fontSize: 22,
		fontWeight: "700",
		color: "#ffffff",
	},
	pokesContainer: {
		flex: 1,
		padding: 16,
		width: "100%",
	},
	optionButton: {
		backgroundColor: "#ea4c89",
		padding: 16,
		height: 100,
		width: 100,
	},
});
