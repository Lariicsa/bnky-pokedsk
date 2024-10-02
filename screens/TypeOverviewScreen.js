/** @format */

import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { fetchPokemonsByType} from '../utils/http'
import PokemonItem from "../components/PokemonItem";

function TypeOverviewScreen({ route, navigation }) {

const typeId = route.params.typeId




}

export default TypeOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});