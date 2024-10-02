/** @format */

import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { fetchPokemonsByType} from '../utils/http'

import IconButton from "../components/IconButton";
import AppList from "../components/MealDetail/List";
import AppSubtitle from "../components/AppSubtitle";

function PokemonDetailScreen({ route, navigation }) {

  const [fetchedTypeData, setTypeData]

  const typeId = route.params.typeId

  


}

export default PokemonDetailScreen;

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 32,
	},
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
		textAlign: "center",
		color: "white",
	},
	detailText: {
		color: "white",
	},
	listOuterContainer: {
		alignItems: "center",
	},
	listContainer: {
		width: "80%",
	},
});
