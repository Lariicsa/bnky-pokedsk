/** @format */

import { TextInput, View, StyleSheet, Text, Button } from "react-native";

export default function AnswerInput({ label, textInputConfig }) {
	return (
		<View style={styles.wrapper}>
			<TextInput
				style={styles.input}
				keyboardType="text"
				{...textInputConfig}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		borderColor: "#c1c1c1",
		borderStyle: "solid",
		borderWidth: 1,
		backgroundColor: "#fff",
		borderRadius: 8,
		display: "flex",
		width: "100%",
		height: 44,
		padding: 8,
		position: "relative",
	},

	input: {
		width: "100%",
		fontSize: 20,
		backgrounColor: "#fff",
		border: "none",
		textAlign: "center",
	},
});
